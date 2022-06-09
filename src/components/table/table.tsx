import React, {useEffect, useState} from 'react';
import {
  Box,
  BoxProps,
  Center,
  Divider,
  Flex,
  FlexProps,
  Select,
  SelectProps,
  StylesProvider,
  Text,
  useBreakpointValue,
  useMultiStyleConfig,
} from '@chakra-ui/react';
import {IconButton} from '../button';
import {
  FaCaretDown,
  FaCaretUp,
  FaChevronLeft,
  FaChevronRight,
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
} from 'react-icons/fa';
import {usePagination} from './table.hooks';

// Based on NIAID's Table Styles
// https://designsystem.niaid.nih.gov/components/atoms

// Table wrapper.
export interface TableWrapperProps extends BoxProps {
  variant?: string;
  colorScheme?: SelectProps['colorScheme'];
}

export const TableWrapper: React.FC<TableWrapperProps> = ({
  children,
  variant,
  colorScheme,
  ...props
}) => {
  const styles = useMultiStyleConfig('Table', {variant, colorScheme});

  return (
    <Box __css={styles.wrapper} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
};

export interface TablePaginationProps extends FlexProps {
  /**
   * Table data list.
   */
  data: any[];
  /**
   * Number of rows to display on each page.
   */
  pageSize: number;

  /**
   * Returns the paginated list of rows to display. Used to display rows in table.
   */
  setRows: (data: any[]) => void;

  /**
   * Color scheme for table. Defaults to gray.
   */
  colorScheme?: SelectProps['colorScheme'];

  /**
   * Number to increment the per page select dropdown. Defaults to increments of 5.
   */
  pageSizeOptionsIncrement?: number;
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  data,
  colorScheme = 'gray',
  setRows,
  pageSize: initialPageSize,
  pageSizeOptionsIncrement = 5,
  ...props
}) => {
  // For pagination - how many rows should be displayed.
  const [pageSize, setPageSize] = useState(initialPageSize);

  const [rows, updateRows, currentPage] = usePagination(data, pageSize);

  const size = useBreakpointValue({base: 'lg', sm: 'sm'});
  const styles = useMultiStyleConfig('Table', {colorScheme});
  const numPages = Math.ceil(data.length / pageSize);
  const numRows =
    Math.round(pageSize / pageSizeOptionsIncrement) * pageSizeOptionsIncrement;

  useEffect(() => {
    setRows(rows);
  }, [rows]);

  const ArrowButton = ({
    ariaLabel,
    icon,
    isDisabled,
    handleClick,
  }: {
    ariaLabel: string;
    icon: React.ReactElement;
    isDisabled: boolean;
    handleClick: () => void;
  }) => {
    return (
      <IconButton
        colorScheme={colorScheme}
        size={size}
        aria-label={ariaLabel}
        icon={icon}
        variant='outline'
        isDisabled={isDisabled}
        onClick={handleClick}
        mx={0.5}
        display={['none', 'flex']}
      ></IconButton>
    );
  };

  return (
    <Flex __css={styles.pagination} colorScheme={colorScheme} {...props}>
      <Flex
        p={4}
        bg='page.alt'
        w='100%'
        justifyContent='space-between'
        flexDirection={['column', 'row']}
      >
        {/* Select options for displaying per page rows */}
        <Flex pb={[4, 0]} flex={[1, 'unset']} flexDirection={['column', 'row']}>
          <Text fontSize='sm'>Rows per page: </Text>
          {/* Display row options by increments of 5. */}
          <Select
            value={
              numRows > data.length
                ? Math.ceil(data.length / pageSizeOptionsIncrement) *
                  pageSizeOptionsIncrement
                : numRows
            }
            onChange={e => setPageSize(+e.currentTarget.value)}
            size={size}
            colorScheme={colorScheme}
            mx={[0, 2]}
            cursor='pointer'
            bg='white'
            aria-label={'Select number of rows per page'}
          >
            {Array.from(
              Array(Math.ceil(data.length / pageSizeOptionsIncrement)),
            ).map((_, i) => {
              return (
                <option key={i} value={(i + 1) * pageSizeOptionsIncrement}>
                  {(i + 1) * pageSizeOptionsIncrement}
                </option>
              );
            })}
          </Select>
        </Flex>

        {/* Navigation for pages. */}
        <Flex flex={[1, 'unset']} flexDirection={['column', 'row']}>
          <ArrowButton
            icon={<FaAngleDoubleLeft />}
            ariaLabel='Go to first page.'
            isDisabled={currentPage === 0}
            handleClick={() => updateRows(0)}
          ></ArrowButton>
          <ArrowButton
            icon={<FaChevronLeft />}
            ariaLabel='Go to previous page.'
            isDisabled={currentPage === 0}
            handleClick={() => updateRows(currentPage - 1)}
          ></ArrowButton>
          <Select
            value={currentPage}
            onChange={e => updateRows(+e.currentTarget.value)}
            size={size}
            colorScheme={colorScheme}
            mx={[0, 4]}
            my={[2, 0]}
            cursor='pointer'
            bg='white'
            aria-label={'Select page'}
          >
            {Array.from(Array(numPages)).map((_, i) => {
              return (
                <option key={i} value={i}>
                  Page {i + 1}
                </option>
              );
            })}
          </Select>
          <ArrowButton
            icon={<FaChevronRight />}
            ariaLabel='Go to next page.'
            isDisabled={currentPage + 1 === numPages}
            handleClick={() => updateRows(currentPage + 1)}
          ></ArrowButton>
          <ArrowButton
            icon={<FaAngleDoubleRight />}
            ariaLabel='Go to last page.'
            isDisabled={currentPage + 1 === numPages}
            handleClick={() => updateRows(numPages - 1)}
          ></ArrowButton>
        </Flex>
      </Flex>

      {/* Display of what is currently showing. */}
      <Flex
        alignItems='center'
        justifyContent='flex-end'
        w='100%'
        bg='white'
        p={4}
      >
        <Text fontSize='sm'>
          Page {currentPage + 1} of {numPages}
        </Text>
        <Center display={'flex'} h='20px' mx={2}>
          <Divider orientation='vertical' />
        </Center>
        <Text fontSize='sm'>{data.length} items total</Text>
      </Flex>
    </Flex>
  );
};

// Toggle rows sort order buttons. Should be put in header cells (Th).
export const TableSortToggle = ({
  isSelected,
  sortBy,
  handleToggle,
}: {
  isSelected: boolean;
  sortBy: 'ASC' | 'DESC';
  handleToggle: (sortByAsc: boolean) => void;
}) => {
  return (
    <Flex display='inline-flex' ml={2}>
      <IconButton
        icon={<FaCaretUp />}
        aria-label='sort table column ascending'
        ml={1}
        colorScheme='gray'
        variant='ghost'
        size='xs'
        color={isSelected && sortBy === 'ASC' ? 'inherit' : 'gray.200'}
        onClick={() => handleToggle(true)}
      />
      <IconButton
        icon={<FaCaretDown />}
        aria-label='sort table column descending'
        ml={1}
        colorScheme='gray'
        size='xs'
        variant='ghost'
        color={isSelected && sortBy === 'DESC' ? 'inherit' : 'gray.200'}
        onClick={() => handleToggle(false)}
      />
    </Flex>
  );
};

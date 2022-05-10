import React, {useEffect, useState} from 'react';
import {
  Text,
  Flex,
  StylesProvider,
  Box,
  BoxProps,
  Select,
  useMultiStyleConfig,
  FlexProps,
  SelectProps,
  useBreakpointValue,
} from '@chakra-ui/react';
import {IconButton} from '../button';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

// Based on NIAID's Table Styles
// https://designsystem.niaid.nih.gov/components/atoms

// Table wrapper.
export interface TableWrapperProps extends BoxProps {
  variant?: string;
}

export const TableWrapper: React.FC<TableWrapperProps> = ({
  children,
  variant,
  ...props
}) => {
  const styles = useMultiStyleConfig('Table', {variant});

  return (
    <Box __css={styles.wrapper} {...props}>
      <StylesProvider value={styles}>{children}</StylesProvider>
    </Box>
  );
};

export interface TablePaginationProps extends FlexProps {
  numPages: number;
  value: number;
  handleChange: (num: number) => void;
  colorScheme: SelectProps['colorScheme'];
}

export const TablePagination: React.FC<TablePaginationProps> = ({
  numPages,
  value,
  handleChange,
  colorScheme = 'gray',
  ...props
}) => {
  const size = useBreakpointValue({base: 'lg', sm: 'sm'});
  const styles = useMultiStyleConfig('Table', {});

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
      ></IconButton>
    );
  };

  return (
    <Flex __css={styles.pagination} {...props}>
      <Text>
        Page {value + 1} of {numPages}
      </Text>

      <Flex mb={[2, 0]}>
        <ArrowButton
          icon={<FaChevronLeft />}
          ariaLabel='Go to previous page.'
          isDisabled={value === 0}
          handleClick={() => handleChange(value - 1)}
        ></ArrowButton>
        <Select
          value={value}
          onChange={e => handleChange(+e.currentTarget.value)}
          size={size}
          minW={'80px'}
          maxW={'80px'}
          colorScheme={colorScheme}
          mx={4}
          cursor='pointer'
        >
          {Array.from(Array(numPages)).map((_, i) => {
            return (
              <option key={i} value={i}>
                {i + 1}
              </option>
            );
          })}
        </Select>
        <ArrowButton
          icon={<FaChevronRight />}
          ariaLabel='Go to next page.'
          isDisabled={value + 1 === numPages}
          handleClick={() => handleChange(value + 1)}
        ></ArrowButton>
      </Flex>
    </Flex>
  );
};

export const usePagination = (
  data: any[],
  size: number,
  from = 0,
): [any[], (num: number) => void, number] => {
  const [currentPage, setCurrentPage] = useState<number>(from);
  const [rows, setRows] = useState<any[]>(data);

  const updateRows = (num: number) => {
    const min = num * size;
    const max = num * size + size;
    setCurrentPage(num);
    setRows(data.slice(min, max < data.length ? max : data.length));
  };

  useEffect(() => {
    updateRows(from);
  }, [data, from, size]);

  return [rows, updateRows, currentPage];
};

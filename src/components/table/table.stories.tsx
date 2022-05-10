import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import {TableWrapper, TablePagination, usePagination} from './table';

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    controls: {sort: 'alpha'},
  },

  argTypes: {
    /* theming */
    children: {
      name: 'children',
      table: {
        type: {
          summary: 'text|React.ReactElement',
        },
      },
    },
    colorScheme: {
      name: 'colorScheme',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'gray'],
      },
      table: {
        type: {
          summary: 'primary|secondary|gray|success|warning|negative|info',
        },
      },
    },
    size: {
      name: 'size',
      control: {
        type: 'radio',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        type: {
          summary: 'sm|md|lg',
        },
      },
    },

    variant: {
      name: 'variant',
      control: {
        type: 'select',
        options: ['simple', 'striped', 'unstyled'],
      },
      table: {
        type: {
          summary: '"simple" | "striped" | "unstyled"',
        },
      },
    },
  },
} as ComponentMeta<typeof Table>;

const items = [
  {
    toConvert: '1',
    into: 'millimetres (mm)',
    multiplyBy: 'multiply by',
  },
  {
    toConvert: '2',
    into: 'centimetres (cm)',
    multiplyBy: '30.48',
  },
  {
    toConvert: '3',
    into: 'metres (m)',
    multiplyBy: '0.91444',
  },
  {
    toConvert: '4',
    into: 'millimetres (mm)',
    multiplyBy: 'multiply by',
  },
  {
    toConvert: '5',
    into: 'centimetres (cm)',
    multiplyBy: '30.48',
  },
  {
    toConvert: '6',
    into: 'metres (m)',
    multiplyBy: '0.91444',
  },
];

export const TableExample: ComponentStory<typeof Table> = args => {
  return (
    <TableWrapper>
      <TableContainer>
        <Table {...args}>
          <TableCaption>This is the table caption</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            {items.map((item, i) => {
              return (
                <Tr key={i}>
                  <Td>{item.toConvert}</Td>
                  <Td>{item.into}</Td>
                  <Td isNumeric>{item.multiplyBy}</Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </TableWrapper>
  );
};

export const TableExampleWithPagination: ComponentStory<typeof Table> =
  args => {
    const SIZE = 4;
    const NUM_PAGES = Math.ceil(items.length / SIZE);

    const [rows, updateRows, currentPage] = usePagination(items, SIZE, 1);

    return (
      <TableWrapper>
        <TableContainer>
          <Table {...args}>
            <TableCaption>This is the table caption</TableCaption>
            <Thead>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Thead>
            <Tbody>
              {rows.map((item: any, i: number) => {
                return (
                  <Tr key={i}>
                    <Td>{item.toConvert}</Td>
                    <Td>{item.into}</Td>
                    <Td isNumeric>{item.multiplyBy}</Td>
                  </Tr>
                );
              })}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>To convert</Th>
                <Th>into</Th>
                <Th isNumeric>multiply by</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <TablePagination
          value={currentPage}
          numPages={NUM_PAGES}
          handleChange={num => updateRows(num)}
          colorScheme={args.colorScheme}
        ></TablePagination>
      </TableWrapper>
    );
  };

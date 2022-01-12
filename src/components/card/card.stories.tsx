import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Text, Button} from '@chakra-ui/react';
import {Card, CardHeader, CardTitle, CardActions} from './card';

export default {
  title: 'Components/Card',
  component: Card,

  argTypes: {
    children: {
      description: 'Inner element or text for element',
      table: {
        type: {summary: 'text|React.ReactElement'},
      },
    },
    boxProps: {
      description:
        'The card component composes the chakra-ui Box component, so you can pass all Box style props.',
      table: {
        type: {summary: 'BoxProps'},
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = args => <Card {...args} />;

export const CardExample = Template.bind({});
CardExample.args = {children: 'Card with some example content inside'};

export const CardWithHeader: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </CardHeader>
      <Text>{args.children}</Text>
    </Card>
  );
};

CardWithHeader.args = {
  children: 'Card with a header title.',
};

export const CardWithHeaderAndMaxWidth: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title</CardTitle>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </CardHeader>
      <Text>{args.children}</Text>
    </Card>
  );
};

CardWithHeaderAndMaxWidth.args = {
  children: 'Card with a header + set max width.',
  maxW: '50%',
};

export const CardWithLongHeader: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>This is a long title that should cause wrapping</CardTitle>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </CardHeader>
      <Text>{args.children}</Text>
    </Card>
  );
};

export const CardWithLongHeaderAndMaxWidth: ComponentStory<
  typeof Card
> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>This is a long title that should cause wrapping</CardTitle>
        <CardActions>
          <Button>Button</Button>
        </CardActions>
      </CardHeader>
      <Text>{args.children}</Text>
    </Card>
  );
};

CardWithLongHeaderAndMaxWidth.args = {
  children: 'Card with a set max width and a long header',
  maxW: '50%',
};

export const CardWithMultipleActions: ComponentStory<typeof Card> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title heading</CardTitle>
        <CardActions>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardActions>
      </CardHeader>
      <Text>{args.children}</Text>
    </Card>
  );
};

CardWithMultipleActions.args = {
  children: 'Card with many actions',
};

export const CardWithMultipleActionsAndMaxWidth: ComponentStory<
  typeof Card
> = args => {
  return (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Title heading</CardTitle>
        <CardActions>
          <Button>Button</Button>
          <Button>Button</Button>
        </CardActions>
      </CardHeader>
      <Text>{args.children}</Text>
    </Card>
  );
};

CardWithMultipleActionsAndMaxWidth.args = {
  children: 'Card with many actions and a set max width.',
  maxW: '50%',
};

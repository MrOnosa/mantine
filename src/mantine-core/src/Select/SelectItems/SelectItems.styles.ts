import { createStyles, MantineSize } from '@mantine/styles';

interface SelectItemsStyles {
  size: MantineSize;
}

export default createStyles((theme, { size }: SelectItemsStyles) => ({
  item: {
    ...theme.fn.fontStyles(),
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
      size,
      sizes: theme.spacing,
    })}px`,
    cursor: 'pointer',
    fontSize: theme.fn.size({ size, sizes: theme.fontSizes }),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    borderRadius: theme.radius.sm,

    '&[data-hovered]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[1],
    },

    '&[data-selected]': {
      backgroundColor: theme.fn.variant({ variant: 'filled' }).background,
      color: theme.fn.variant({ variant: 'filled' }).color,
      ...theme.fn.hover({ backgroundColor: theme.fn.variant({ variant: 'filled' }).hover }),
    },

    '&[data-disabled]': {
      cursor: 'default',
      color: theme.colors.dark[2],
    },
  },

  nothingFound: {
    boxSizing: 'border-box',
    color: theme.colors.gray[6],
    paddingTop: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    paddingBottom: theme.fn.size({ size, sizes: theme.spacing }) / 2,
    textAlign: 'center',
  },

  separator: {
    boxSizing: 'border-box',
    textAlign: 'left',
    width: '100%',
    padding: `${theme.fn.size({ size, sizes: theme.spacing }) / 1.5}px ${theme.fn.size({
      size,
      sizes: theme.spacing,
    })}px`,
  },

  separatorLabel: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
  },
}));

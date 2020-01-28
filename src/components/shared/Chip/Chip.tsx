import React, { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';

import styles from './Chip.module.scss';

interface Props {
  className: string;
  active?: boolean;
}

export const Chip: FC<Props> = props => {
  return (
    <div
      className={clsx(
        styles.chip,
        props.className,
        props.active && styles.active
      )}
    >
      {props.children}
    </div>
  );
};

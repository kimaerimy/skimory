import clsx from 'clsx';

interface Props {
  value: number;
  maxValue?: number;
  color?: string;
  className?: string; //clsx와 함께 사용해보자~
}

const Rating = ({ value, maxValue = 5, className, color }: Props) => {
  const bgColor = `bg-${color}`;
  const borderColor = `border-${color}`;
  return (
    <div>
      {Array.from({ length: maxValue }).map((_, index) =>
        index < value ? (
          <span
            key={index}
            className={clsx(
              'inline-block w-4 h-4 rounded-full mr-1',
              className,
            )}
          ></span>
        ) : (
          <span
            key={index}
            className={clsx(
              'inline-block w-4 h-4 border-2 rounded-full mr-1',
              className,
            )}
          ></span>
        ),
      )}
    </div>
  );
};

export default Rating;

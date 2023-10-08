import cn from 'classnames';
import Icon from '../../Icon/Icon';

type Props = {
  isReversed?: boolean;
  className?: string;
  onClick: () => void;
};

function SliderArrow({ onClick, isReversed = false, className }: Props) {
  return (
    <button
      type="button"
      className={cn(
        'flex-shrink-0 transition-opacity duration-300 hover:opacity-60',
        isReversed && 'relative rotate-180',
        className,
      )}
      onClick={onClick}
    >
      <Icon size={40} height={40} viewBox="0 0 40 40" icon="button" />
    </button>
  );
}

export default SliderArrow;

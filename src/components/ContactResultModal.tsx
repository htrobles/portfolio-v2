import { ContactSendResult } from './Contact';
import Button from './Button';
import Card from './Card';

type ContactResultModalProps = {
  result?: ContactSendResult;
  onDismiss: () => void;
};

export default function ContactResultModal({
  result,
  onDismiss,
}: ContactResultModalProps) {
  const classes = [
    'fixed',
    'top-0',
    'bottom-0',
    'left-0',
    'right-0',
    'z-50',
    'bg-black',
    'bg-opacity-50',
    'backdrop-blur-lg',
    'flex',
    'justify-center',
    'items-center',
  ];

  if (result) {
    classes.push('visible');
  } else {
    classes.push('hidden');
  }

  const headerClasses = ['text-xl', 'font-bold', 'mb-4'];
  if (result?.status === 'success') {
    headerClasses.push('text-success');
  } else {
    headerClasses.push('text-danger');
  }

  return (
    <div className={classes.join(' ')} onClick={onDismiss}>
      <Card>
        <div className='flex flex-col align-center max-w-sm'>
          <h3 className={headerClasses.join(' ')}>
            {result?.status === 'success' ? 'Success' : 'Something went wrong'}
          </h3>
          <p className='mb-12'>{result?.message}</p>
          <Button type='outline' color='white' onClick={onDismiss}>
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
}

import { useIsFetching, useIsMutating } from 'react-query';

export const useIsRequesting = () => {
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();

  return {
    isRequesting: !!isFetching || !!isMutating,
  };
};

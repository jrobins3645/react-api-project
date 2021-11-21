import { ReactNode, useState } from "react";
import Event from "../models/Event";
import BucketContext from "./BucketContext";

interface Props {
  children: ReactNode;
}

const BucketContextProvider = ({ children }: Props) => {
  const [bucketList, setBucketList] = useState<Event[]>([]);
  const addBucket = (singleEvent: Event): void => {
    setBucketList((prev) => [...prev, singleEvent]);
  };
  const removeBucket = (id: string): void => {
    setBucketList((prev) => {
      const index: number = prev.findIndex((item) => item.id === id);
      return [...prev.slice(0, index), ...prev.slice(index + 1)];
    });
  };
  const isBucket = (id: string): boolean =>
    bucketList.some((singleEvent) => singleEvent.id === id);

  return (
    <BucketContext.Provider
      value={{ bucketList, addBucket, removeBucket, isBucket }}
    >
      {children}
    </BucketContext.Provider>
  );
};

export default BucketContextProvider;

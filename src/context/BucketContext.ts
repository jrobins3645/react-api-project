import { createContext } from "react";
import Event from "../models/Event";

interface BucketContextModel {
  bucketList: Event[];
  addBucket: (singleEvent: Event) => void;
  removeBucket: (id: string) => void;
  isBucket: (id: string) => boolean;
}

const defaultValues: BucketContextModel = {
  bucketList: [],
  addBucket: () => {},
  removeBucket: () => {},
  isBucket: () => false,
};

const BucketContext = createContext(defaultValues);

export default BucketContext;

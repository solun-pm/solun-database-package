import { Model, Document, UpdateWriteOpResult } from "mongoose";

/* Used to get a document from the database */
export async function findOneDocument<T extends Document>(
  model: Model<T>,
  query: object
): Promise<T | null> {
  const document = await model.findOne(query).exec();
  return document;
}

/* Used to get a document from the database, where the query is case insensitive */
export async function findOneCASEDocument<T extends Document>(
  model: Model<T>,
  query: object
): Promise<T | null> {
  const caseInsensitiveQuery: any = Object.entries(query).reduce(
    (acc, [key, value]) => {
      // @ts-ignore
      acc[key] = { $regex: new RegExp(`^${value}$`, "i") };
      return acc;
    },
    {}
  );

  const document = await model.findOne(caseInsensitiveQuery).exec();
  return document;
}

/* Used to get all documents from the database */
export async function findDocuments<T extends Document>(
  model: Model<T>,
  query: object
): Promise<T[]> {
  const documents = await model.find(query).exec();
  return documents;
}

/* Used to delete a document from the database */
export async function deleteOneDocument<T extends Document>(
  model: Model<T>,
  query: object
): Promise<number> {
  const result = await model.deleteOne(query).exec();
  return result.deletedCount;
}

/* Used to update a document in the database */
export async function updateOneDocument<T extends Document>(
  model: Model<T>,
  filter: object,
  update: object
): Promise<UpdateWriteOpResult> {
  const result = await model.updateOne(filter, update).exec();
  return result;
}
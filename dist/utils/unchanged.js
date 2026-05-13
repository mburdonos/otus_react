/* eslint-disable @typescript-eslint/no-explicit-any */
import { get as $get, remove as $remove, set as $set, add as $add } from './unchanged';
export const get = (path, object) => $get(path, object);
export const remove = (path, object) => $remove(path, object);
export const set = (path, data, object) => $set(path, data, object);
export const add = (path, data, object) => $add(path, data, object);

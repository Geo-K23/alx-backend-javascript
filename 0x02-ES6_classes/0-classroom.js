/**
 * Representation of a class room
 * ClassRoom class has a constructor that takes a maxStudentsSize,
 * parameter and assigns it to the private variable _maxStudentsSize
 * The class is then exported as a default export so that it,
 * can be imported and used in other files
 */
export default class ClassRoom {
  constructor(maxStudentsSize) {
    this._maxStudentsSize = maxStudentsSize;
  }
}

const db = require('../db');

module.exports = {
  /**
   * @param student
   * sets isSuspended status to true for the student
   * not sure if we need to do validation here..
   */
  suspendStudent: student => {
    /* istanbul ignore next */
    return db.Student.update(
      { isSuspended: true },
      {
        // since, we are not returning this record after update..
        // returning: true,
        plain: true,
        where: { email: student }
      }
    );
  }
};

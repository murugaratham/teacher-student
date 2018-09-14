module.exports = {
  getTeacherCount: teacher =>
    Array.isArray(teacher) === true ? teacher.length : 1
};

module.exports = {
  /**
   * @param array
   *
   * This is a helper utility that takes the request body of teachers
   * and returns 1 if it's not an array. If it's an array, it will return array length
   */
  getEntityCount: strOrArray =>
    Array.isArray(strOrArray) === true ? strOrArray.length : 1,
  /**
   * @notification
   *
   */
  searchMentionedEmails: notification => {
    const searchMentionedEmailsRegex = /\@\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*([,;]\s*\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*)*/gm;
    const matchedGroups = notification.match(searchMentionedEmailsRegex);
    return matchedGroups.map(email => email.replace(/^@/, ''));
  }
};

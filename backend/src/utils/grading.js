const gradeFor = (score) => {
  if (score >= 80) return { grade: 'A', remark: 'Excellent' };
  if (score >= 70) return { grade: 'B', remark: 'Very Good' };
  if (score >= 60) return { grade: 'C', remark: 'Good' };
  if (score >= 50) return { grade: 'D', remark: 'Pass' };
  if (score >= 40) return { grade: 'E', remark: 'Weak' };
  return { grade: 'F', remark: 'Fail' };
};

module.exports = { gradeFor };
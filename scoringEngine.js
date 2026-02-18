function scoreSkill(skillUsageCount, commitCount) {
  return skillUsageCount * 2 + commitCount * 0.5;
}

module.exports = scoreSkill;

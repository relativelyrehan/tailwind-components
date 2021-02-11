const filterTemplates = (tags, templates) => {
  const finalRecomendations = [];
  for (let oneTemplate of templates) {
    if (oneTemplate.subCategory.length > 0) {
      finalRecomendations.push(oneTemplate);
    }
    if (finalRecomendations.length === 3) {
      break;
    }
  }

  if (finalRecomendations.length === 3) {
    return finalRecomendations;
  } else {
    for (let oneTemplate of templates) {
      if (oneTemplate.subCategory.length === 0) {
        finalRecomendations.push(oneTemplate);
      }
      if (finalRecomendations.length === 3) {
        break;
      }
    }
    return finalRecomendations;
  }
};

module.exports = filterTemplates;

function constructionCrew(obj) {
  if (obj.dizziness === true) {
    obj.levelOfHydrated += obj.weight * obj.experience * 0.1;
  }
  console.log(obj);
  return obj
}

constructionCrew({ weight: 120,
  experience: 20,
  levelOfHydrated: 200,
  dizziness: true }
);

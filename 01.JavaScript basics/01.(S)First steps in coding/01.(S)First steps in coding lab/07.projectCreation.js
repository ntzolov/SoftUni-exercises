function projectHours(input) {
    let nameArchitect = input[0]
    let countProjects = Number(input[1])
    let hourForOneProject = 3
    console.log(`The architect ${nameArchitect} will need ${countProjects * hourForOneProject} hours to complete ${countProjects} project/s.`)
}

projectHours(["George","4"])
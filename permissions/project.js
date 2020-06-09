  //Create all the diffrent authentications for what we can do with our projects
  const {ROLE} = require('../data')
  function canViewProject(user,project){
      //Return true or false for if the user has access to this project
      return (
          user.role === ROLE.ADMIN || project.userId === user.id

      )
  }
  function scopedProjects(user,projects){
      if(user.role === ROLE.ADMIN) return projects
      return projects.filter(project => project.userId === user.id)
  }

  module.exports = {
      canViewProject,
      scopedProjects
  }
import React from 'react'

export default function Skills({skills}) {
  return (
    <div>
        <h2>List of Skills</h2>
      <ul>
        {skills.map(skill => (
            <li key = {skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  )
}

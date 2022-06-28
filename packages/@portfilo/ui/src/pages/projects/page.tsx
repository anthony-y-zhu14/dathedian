import React from 'react'
import PorjectCard from 'components/project-card/component'
import { PROJECTS } from 'constants/projects'
import { Grid } from '@mui/material'

export default function Projects () {
  return (
    <Grid
      container
      className='works'
      spacing={4}
      height='80vh'
      display='flex'
      flexWrap='wrap'
      justifyContent='center'
      alignItems='center'
    >
      {Object.keys(PROJECTS).map((project: string) => (
        <Grid item key={project}>
          <PorjectCard key={project} project={PROJECTS[project]} />
        </Grid>
      ))}
    </Grid>
  )
}
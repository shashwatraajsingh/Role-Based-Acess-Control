import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { Role } from '../auth/roles.enum';

@Controller('projects')
@UseGuards(RolesGuard)
export class ProjectsController {
  @Post()
  @Roles(Role.ProjectManager, Role.SuperAdmin)
  createProject(@Body() body: any) {
    return { message: 'Project created', data: body };
  }

  @Get()
  @Roles(Role.ProjectManager, Role.TeamMember, Role.Client, Role.SuperAdmin)
  getProjects() {
    return { message: 'All Projects' };
  }
}
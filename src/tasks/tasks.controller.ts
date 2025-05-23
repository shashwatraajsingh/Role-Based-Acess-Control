import { Controller, Get, Post, Patch, Body, UseGuards } from '@nestjs/common';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { Role } from '../auth/roles.enum';

@Controller('tasks')
@UseGuards(RolesGuard)
export class TasksController {
  @Post()
  @Roles(Role.ProjectManager, Role.SuperAdmin)
  createTask(@Body() body: any) {
    return { message: 'Task created', data: body };
  }

  @Patch()
  @Roles(Role.TeamMember)
  updateTaskStatus(@Body() body: any) {
    return { message: 'Task status updated', data: body };
  }

  @Get()
  @Roles(Role.ProjectManager, Role.TeamMember, Role.Client, Role.SuperAdmin)
  getTasks() {
    return { message: 'All Tasks' };
  }
}
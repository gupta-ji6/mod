import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UserComponent } from "./user/user.component";
import { AddUserComponent } from "./user/add-user.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/user/sign-up/sign-up.component";
import { UserLandingComponent } from "./components/user/user-landing/user-landing.component";
import { CompletedTrainingComponent } from "./components/user/completed-training/completed-training.component";
import { OngoingTrainingComponent } from "./components/user/ongoing-training/ongoing-training.component";
import { UserPaymentsComponent } from "./components/user/user-payments/user-payments.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchTrainingsComponent } from "./components/user/search-trainings/search-trainings.component";
import { MentorLandingComponent } from "./components/mentor/mentor-landing/mentor-landing.component";
import { MentorCompletedTrainingsComponent } from "./components/mentor/mentor-completed-trainings/mentor-completed-trainings.component";
import { MentorCurrentTrainingsComponent } from "./components/mentor/mentor-ongoing-trainings/mentor-current-trainings.component";
import { AdminEditSkillsComponent } from "./components/admin/admin-edit-skills/admin-edit-skills.component";
import { MentorSignUpComponent } from "./components/mentor/mentor-sign-up/mentor-sign-up.component";
import { MentorProfileComponent } from "./components/mentor/mentor-profile/mentor-profile.component";
import { AdminEditTechComponent } from "./components/admin/admin-edit-tech/admin-edit-tech.component";
import { AdminUserListComponent } from "./components/admin/admin-user-list/admin-user-list.component";
import { AdminAddTrainingComponent } from "./components/admin/admin-add-training/admin-add-training.component";
import { AdminTrainingsComponent } from "./components/admin/admin-trainings/admin-trainings.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full", },
  { path: "login", component: LoginComponent },
  { path: "user/signup", component: SignUpComponent },
  { path: "mentor/signup", component: MentorSignUpComponent },
  { path: "home", component: HomeComponent },
  { path: "user", component: UserLandingComponent },
  { path: "search", component: SearchTrainingsComponent },
  { path: "user/completed-trainings", component: CompletedTrainingComponent },
  { path: "user/ongoing-trainings", component: OngoingTrainingComponent },
  { path: "user/payments", component: UserPaymentsComponent },
  { path: "mentor", component: MentorLandingComponent },
  { path: "mentor/profile", component: MentorProfileComponent },
  {
    path: "mentor/completed-trainings",
    component: MentorCompletedTrainingsComponent
  },
  {
    path: "mentor/ongoing-trainings",
    component: MentorCurrentTrainingsComponent
  },
  { path: "admin/edit-skills", component: AdminEditSkillsComponent },
  { path: "admin/technologies", component: AdminEditTechComponent },
  { path: "admin/users", component: AdminUserListComponent },
  { path: "admin/training/add", component: AdminAddTrainingComponent },
  { path: "admin/training/view", component: AdminTrainingsComponent },
  { path: "add", component: AddUserComponent },
  { path: "users", component: UserComponent },
  { path: "404", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}

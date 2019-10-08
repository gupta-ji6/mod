import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";
import {
  MatButtonModule,
  MatSliderModule,
  MatChipsModule,
  MatProgressBarModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatToolbarModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatSelectModule,
  MatSortModule,
  MatSnackBarModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatFormFieldModule
} from "@angular/material";
import { LayoutModule } from "@angular/cdk/layout";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { AppRoutingModule } from "./app.routing.module";
import { UserService } from "./user/user.service";
import { HttpClientModule } from "@angular/common/http";
import { AddUserComponent } from "./user/add-user.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/user/sign-up/sign-up.component";
import { UserLandingComponent } from "./components/user/user-landing/user-landing.component";
import { CompletedTrainingComponent } from "./components/user/completed-training/completed-training.component";
import { OngoingTrainingComponent, UpdateProgressDialog } from "./components/user/ongoing-training/ongoing-training.component";
import { UserPaymentsComponent } from "./components/user/user-payments/user-payments.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchTrainingsComponent } from "./components/user/search-trainings/search-trainings.component";
import { MentorLandingComponent } from "./components/mentor/mentor-landing/mentor-landing.component";
import { MentorCurrentTrainingsComponent } from "./components/mentor/mentor-ongoing-trainings/mentor-current-trainings.component";
import { MentorCompletedTrainingsComponent } from "./components/mentor/mentor-completed-trainings/mentor-completed-trainings.component";
import { AdminEditSkillsComponent } from "./components/admin/admin-edit-skills/admin-edit-skills.component";
import { MentorSignUpComponent } from "./components/mentor/mentor-sign-up/mentor-sign-up.component";
import { MentorProfileComponent } from "./components/mentor/mentor-profile/mentor-profile.component";
import { AdminEditTechComponent } from "./components/admin/admin-edit-tech/admin-edit-tech.component";
import { AdminUserListComponent } from "./components/admin/admin-user-list/admin-user-list.component";
import { AdminAddTrainingComponent } from "./components/admin/admin-add-training/admin-add-training.component";
import { AdminTrainingsComponent } from "./components/admin/admin-trainings/admin-trainings.component";
import { LoginService } from "./services/login.service";
import { MentorSignupService } from "./services/mentor-signup.service";
import { PaymentService } from "./services/payment.service";
import { SkillService } from "./services/skill.service";
import { TechnologyService } from "./services/technology.service";
import { TrainingService } from "./services/training.service";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { LogoutComponent } from "./components/logout/logout.component";

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AddUserComponent,
    LoginComponent,
    SignUpComponent,
    UserLandingComponent,
    CompletedTrainingComponent,
    OngoingTrainingComponent,
    UserPaymentsComponent,
    HomeComponent,
    SearchTrainingsComponent,
    MentorLandingComponent,
    MentorSignUpComponent,
    MentorProfileComponent,
    MentorCurrentTrainingsComponent,
    MentorCompletedTrainingsComponent,
    AdminEditSkillsComponent,
    AdminEditTechComponent,
    AdminUserListComponent,
    AdminAddTrainingComponent,
    AdminTrainingsComponent,
    PageNotFoundComponent,
    LogoutComponent,
    UpdateProgressDialog
  ],
  imports: [
    LayoutModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatChipsModule,
    MatProgressBarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule,
    MatFormFieldModule
  ],
  providers: [UserService, MatDatepickerModule, LoginService, MentorSignupService, PaymentService, SkillService, TechnologyService, TrainingService, UserService],
  entryComponents: [UpdateProgressDialog, OngoingTrainingComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

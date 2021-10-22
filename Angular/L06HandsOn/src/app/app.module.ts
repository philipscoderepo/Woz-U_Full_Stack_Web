import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { GreetingComponent } from './shared/components/greeting/greeting.component';
import { MessageFormModule } from './modules/message-form/message-form.module';

import { SkillsModule } from './modules/skills/skills.module';

@NgModule({
    declarations: [AppComponent, GreetingComponent],
    imports: [BrowserModule, FormsModule, SkillsModule, MessageFormModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
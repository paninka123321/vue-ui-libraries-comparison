<template>
  <v-container class="pa-4">
    <v-card elevation="3" class="rounded-xl">
      <v-card-title>Settings Menu</v-card-title>
      <v-list>
        <v-list-group value="account" prepend-icon="mdi-account">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Account"></v-list-item>
          </template>
          <v-list-item title="Profile" value="profile"></v-list-item>
          <v-list-item title="Settings" value="settings"></v-list-item>
        </v-list-group>
      </v-list>
    </v-card>
  </v-container>
</template>
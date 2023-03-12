<template>
  <v-dialog v-model="modal" width="auto">
    <template v-slot:activator="{ props }">
      <v-btn variant="tonal" color="amber-accent-3" v-bind="props">
        Agregar estudiante
      </v-btn>
    </template>

    <v-card>
      <v-toolbar color="amber-accent-1">
        <v-toolbar-title>Agregar estudiante</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="modal = false">
          <v-icon>fa-times</v-icon>
        </v-btn>
      </v-toolbar>
      <v-container>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Nombres y apellidos completos" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Cédula" type="number" required></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Telefono del representante"
              type="tel"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="2">
            <input type="date" name="" id="" />
          </v-col>
          <v-col cols="2">
            <v-switch label="Genero" value=""></v-switch>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6" md="4">
            <v-select
              label="Año"
              chips
              :items="['1', '2', '3', '4', '5', '6']"
            ></v-select>
          </v-col>
          <v-col cols="6" md="4">
            <v-select label="Sección" chips :items="['A', 'B', 'C', 'D']"></v-select>
          </v-col>
          <v-col cols="6" md="4">
            <v-select
              label="Mensión"
              chips
              :items="['Telematica', 'Administración', 'Contabilidad']"
            ></v-select>
          </v-col>
        </v-row>
      </v-container>
      <v-card-actions>
        <v-btn class="mx-auto px-12" variant="outline" @click="modal = false"
          >Cancelar</v-btn
        >
        <v-btn
          color="amber-accent-3"
          class="mx-auto px-12"
          variant="tonal"
          @click="modal = false"
          >Agregar</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "AggEstudiante",
  data() {
    return {
      modal: false,
    };
  },
});
</script>

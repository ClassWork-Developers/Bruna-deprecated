<template>
  <section class="main-container">
    <h2 class="text-center">
      {{ modoRegistro ? "Crea tu cuenta de coordinación aquí" : "Inicia sesión aquí" }}
    </h2>
    <form @submit.prevent="submit">
      <v-text-field
        v-if="modoRegistro"
        v-model="name.value.value"
        :error-messages="name.errorMessage.value"
        label="Nombre y apellido"
      ></v-text-field>

      <v-text-field
        v-model="user.value.value"
        :error-messages="user.errorMessage.value"
        label="Usuario"
      ></v-text-field>

      <v-text-field
        v-if="modoRegistro"
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        v-model="password.value.value"
        :error-messages="password.errorMessage.value"
        label="Contraseña"
      ></v-text-field>

      <v-radio-group
        v-if="modoRegistro"
        v-model="rol.value"
        inline
        label="¿En que coordinación estarás?"
        :error-messages="rol.errorMessage.value"
      >
        <v-radio label="Coordinación I" value="1"></v-radio>
        <v-radio label="Coordinación II" value="2"></v-radio>
      </v-radio-group>
      <p v-if="modoRegistro" class="link-text" @click="modoRegistro = false">
        Ya tengo una cuenta,
        <span class="bold cursor-pointer"> Iniciar sesión </span>
      </p>
      <p v-else class="link-text" @click="modoRegistro = true">
        Aun no tengo cuenta,
        <span class="bold cursor-pointer"> Crear Cuenta </span>
      </p>
      <v-btn class="mx-auto d-block" type="submit" color="amber-accent-3">
        {{ modoRegistro ? "Crear cuenta" : "Iniciar sesión" }}
      </v-btn>
    </form>
  </section>
</template>
<script>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

export default {
  setup() {
    const modoRegistro = ref(true);
    const { handleSubmit, handleReset } = useForm({
      validationSchema: {
        name(value) {
          if (value?.length >= 4 && modoRegistro.value) return true;

          return "Debes indicar tu nombre y apellido";
        },
        user(value) {
          if (value?.length >= 4) return true;

          return "Tu usuario debe tener al menos 4 letras";
        },
        email(value) {
          if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value) && modoRegistro.value)
            return true;

          return "Tu Gmail no parece valido.";
        },
        password(value) {
          if (value?.length >= 6) return true;

          return "Tu contraseña debe tener al menos 6 letras.";
        },
        rol(value) {
          if (value?.length && modoRegistro.value) return true;

          return "Debes seleccionar una coordinación";
        },
      },
    });
    const name = useField("name");
    const user = useField("user");
    const email = useField("email");
    const password = useField("password");

    const rol = useField("rol");

    const submit = handleSubmit((values) => {
      alert(JSON.stringify(values, null, 2));
    });

    return { name, user, email, password, rol, submit, handleReset, modoRegistro };
  },
};
</script>

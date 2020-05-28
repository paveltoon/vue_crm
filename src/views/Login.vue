<template>
<form class="card auth-card" @submit.prevent="onSubmit">
    <div class="card-content">
        <span class="card-title">Домашняя бухгалтерия</span>
        <div class="input-field">
            <input id="email"
            type="text"
            class="validate"
            v-model.trim="email"
            :class="{invalid: ($v.email.$dirty && !$v.email.required) ||
            ($v.email.$dirty && !$v.email.email)}" />
            <label for="email">Email</label>
            <small
            class="helper-text invalid"
            v-if="$v.email.$dirty && !$v.email.required"
            >
              Поле email не может быть пустым
            </small>
            <small
            class="helper-text invalid"
            v-else-if="$v.email.$dirty && !$v.email.email"
            >
              Введите корректный email
            </small>
        </div>
        <div class="input-field">
            <input id="password"
            type="password"
            class="validate"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) ||
            ($v.password.$dirty && !$v.password.minLength)}"
            v-model.trim="password"
            />
            <label for="password">Пароль</label>
            <small
            class="helper-text invalid"
            v-if="$v.password.$dirty && !$v.password.required"
            >Пароль не может быть пустым</small>
            <small
            class="helper-text invalid"
            v-else-if="$v.password.$dirty && !$v.password.minLength"
            >Длина пароля должна быть не менее {{$v.password.$params.minLength.min}} символов
            </small>
        </div>
    </div>
    <div class="card-action">
        <div>
            <button class="btn waves-effect waves-light auth-submit" type="submit">
                Войти
                <i class="material-icons right">send</i>
            </button>
        </div>
        <p class="center">
            Нет аккаунта?
            <router-link to="/register">Зарегистрироваться</router-link>
        </p>
    </div>
</form>
</template>
<script>
import { email, required, minLength } from 'vuelidate/lib/validators';
import Messages from '@/utils/messages';

export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  validations: {
    email: { email, required },
    password: { required, minLength: minLength(6) },
  },
  mounted() {
    if (Messages[this.$route.query.message]) {
      this.$message(Messages[this.$route.query.message]);
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch('login', formData).then(() => {
        this.$router.push('/');
      }).catch((e) => {
        this.$error(Messages[e.code]);
      });
      /* try {
        await this.$store.dispatch('login', formData);
        this.$router.push('/');
      } catch (e) {
        console.log(e);
      } */

      console.log(formData);
    },
  },
};
</script>

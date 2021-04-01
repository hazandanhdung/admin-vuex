<template>
  <div>
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row> </b-row>
    </base-header>
    <b-card>
      <form action="">
        <b-card-body>
          <b-form-group>
            <label class="font-weight-bold">Name</label>
            <b-form-input placeholder="Username"></b-form-input>
          </b-form-group>
          <b-form-group>
            <label class="font-weight-bold">Budget</label>
            <b-form-input placeholder="Budget"></b-form-input>
          </b-form-group>
          <b-form-group label="Status" class="font-weight-bold"
            >for=""
            <b-form-radio v-model="selected" name="some-radios" value="A">
              <b-badge variant="success">Active</b-badge>
            </b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="B">
              <b-badge variant="warning">Not Active</b-badge>
            </b-form-radio>
          </b-form-group>
          <b-form-group>
            <label class="font-weight-bold">User</label>
            <b-card no-body>
              <b-card-body class="card-body">
                <b-form>
                  <b-form-file
                    @change="filesChange"
                    placeholder="Select file"
                    drop-placeholder="Drop file here..."
                  ></b-form-file>
                </b-form>
              </b-card-body>
            </b-card>
          </b-form-group>
          <b-form-group label="Completion" class="font-weight-bold">
            <b-form-radio v-model="selected" name="some-radios" value="A">
              <b-badge variant="default">Done</b-badge>
            </b-form-radio>
            <b-form-radio v-model="selected" name="some-radios" value="B">
              <b-badge variant="primary">Unfinished</b-badge>
            </b-form-radio>
          </b-form-group>
        </b-card-body>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "UserAddNew",
  data() {
    return {};
  },
  methods: {},
  created() {},
};
</script>

<style lang="scss" scoped></style>

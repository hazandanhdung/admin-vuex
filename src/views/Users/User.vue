<template>
  <div>
    <!-- BootstrapVue Done -->
    <base-header class="pb-6 pb-8 pt-5 pt-md-8 bg-gradient-success">
      <!-- Card stats -->
      <b-row> </b-row>
    </base-header>

    <b-container fluid class="mt--7">
      <b-row class="justify-content-center">
        <b-col lg="12">
          <card header-classes="bg-transparent">
            <h3 slot="header" class="mb-0">User System</h3>
            <b-card no-body>
              <b-card-header class="border-0">
                <h3 class="mb-0">Light table</h3>
              </b-card-header>

              <el-table
                class="table-responsive table-flush"
                header-row-class-name="thead-light"
                :data="items"
              >
                <el-table-column
                  label="ID"
                  min-width="190px"
                  prop="id"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body class="pl-3">
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.id }}</span
                        >
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Name"
                  min-width="190px"
                  prop="name"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.name }}</span
                        >
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Budget"
                  min-width="190px"
                  prop="budget"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <span class="font-weight-600 name mb-0 text-sm">
                          {{ row.price }} $</span
                        >
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Status"
                  min-width="170px"
                  prop="status"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="badge-dot mr-4" type="">
                      <div class="status" v-if="row.status == true">
                        <b-badge variant="success">Active</b-badge>
                      </div>
                      <div class="status" v-if="row.status == false">
                        <b-badge variant="warning">Not Active</b-badge>
                      </div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Users"
                  min-width="190px"
                  prop="users"
                  sortable
                >
                  <template v-slot="{ row }">
                    <b-media no-body class="align-items-center">
                      <b-media-body>
                        <a
                          href="#"
                          class="avatar avatar-sm rounded-circle"
                          data-toggle="tooltip"
                          data-original-title="Ryan Tompson"
                        >
                          <img
                            alt="Image placeholder"
                            src="img/theme/team-1.jpg"
                          />
                        </a>
                      </b-media-body>
                    </b-media>
                  </template>
                </el-table-column>
                <el-table-column
                  label="Completion"
                  prop="completion"
                  min-width="240px"
                  sortable
                >
                  <template v-slot="{ row }">
                    <div class="d-flex align-items-center">
                      <div
                        class="completion mr-2"
                        v-if="row.completion == true"
                      >
                        <b-badge variant="default">Done</b-badge>
                      </div>
                      <div
                        class="completion mr-2"
                        v-if="row.completion == false"
                      >
                        <b-badge variant="primary">Unfinished</b-badge>
                      </div>
                      <div></div>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="Action" min-width="180px">
                  <template v-slot="{ row }">
                    <el-dropdown trigger="click" class="dropdown">
                      <span class="btn btn-sm btn-icon-only text-light">
                        <i class="fas fa-ellipsis-v mt-2"></i>
                      </span>
                      <el-dropdown-menu
                        class="dropdown-menu dropdown-menu-arrow show"
                        slot="dropdown"
                      >
                        <b-dropdown-item>
                          <router-link
                            :to="{ name: 'user-add-new' }"
                            class="color__a"
                          >
                            <base-button type="info">Add New User</base-button>
                          </router-link>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <base-button type="primary">Update UsUer</base-button>
                        </b-dropdown-item>
                        <b-dropdown-item>
                          <base-button type="danger">Delete User</base-button>
                        </b-dropdown-item>
                      </el-dropdown-menu>
                    </el-dropdown>
                  </template>
                </el-table-column>
              </el-table>

              <b-card-footer class="py-4 d-flex justify-content-end">
                <base-pagination
                  v-model="currentPage"
                  :per-page="15"
                  :total="50"
                ></base-pagination>
              </b-card-footer>
            </b-card>
          </card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BaseHeader from "@/components/BaseHeader";
import LoadingScreenCenter from "@/components/LoadingScreenCenter/LoadingScreenCenter";
import {
  Table,
  TableColumn,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "element-ui";
import { mapState, mapActions } from "vuex";
import { getListTodoUsers } from "@/api/listUser";

export default {
  name: "user",
  components: {
    BaseHeader,
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
    LoadingScreenCenter,
  },
  data() {
    return {
      items: [],
      loading: false,
      currentPage: 1,
      ApiList: getListTodoUsers,
    };
  },
  computed: {},
  methods: {
    getListDataTableUser() {
      this.$store.commit("Common/setLoading", true);
      this.ApiList()
        .then((res) => {
          this.items = res;
          this.$store.commit("Common/setLoading", false);
        })
        .catch((e) => {
          console.log(e);
          this.$store.commit("Common/setLoading", false);
        });
    },
  },
  created() {
    this.getListDataTableUser();
  },
};
</script>

<style lang="scss" scoped></style>

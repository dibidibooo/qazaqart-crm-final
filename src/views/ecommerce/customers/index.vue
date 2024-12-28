<template>
  <DefaultLayout>
    <PageBreadcrumb title="Customers List" subtitle="Ecommerce" />

    <UIComponentCard id="responsive" title="Заказы мерча с индивидуальным принтом">
          <b-table-simple responsive class="table-centered mb-0">
            <b-thead>
              <b-tr>
                <b-th scope="col">#</b-th>
                <b-th scope="col">Название товара</b-th>
                <b-th scope="col">Цвет</b-th>
                <b-th scope="col">Размер</b-th>
                <b-th scope="col">Количество</b-th>
                <b-th scope="col">Дата заказа</b-th>
                <b-th scope="col">Номер заказа</b-th>
                <b-th scope="col">Адрес доставки</b-th>
                <b-th scope="col">Ссылка на демо</b-th>
                <b-th scope="col">Ссылка на оригинал</b-th>
                <b-th scope="col">Действие</b-th>
              </b-tr>
            </b-thead>
            <b-tbody>
              <b-tr>
                <b-td>1</b-td>
                <b-td>Свитшот</b-td>
                <b-td>Белый</b-td>
                <b-td>S</b-td>
                <b-td>1</b-td>
                <b-td>12/12/2024</b-td>
                <b-td>00001053</b-td>
                <b-td>Майлина, 8</b-td>
                <b-td><a href="https://dbqazaqart.kz/admin">Ссылка</a></b-td>
                <b-td><a href="https://dbqazaqart.kz/admin">Ссылка</a></b-td>
                <b-td>
            <b-button type="button" size="sm" :variant="null" class="btn-soft-secondary me-2">
              <i class="bx bx-edit fs-16"></i>
            </b-button>
            <b-button type="button" size="sm" :variant="null" class="btn-soft-danger">
              <i class="bx bx-trash fs-16"></i>
            </b-button>
          </b-td>
              </b-tr>
              <b-tr>
                <b-td>2</b-td>
                <b-td>Худи</b-td>
                <b-td>Серый</b-td>
                <b-td>M</b-td>
                <b-td>2</b-td>
                <b-td>07/12/2024</b-td>
                <b-td>00001054</b-td>
                <b-td>Гагарина, 134</b-td>
                <b-td>Ссылка на демо</b-td>
                <b-td>Ссылка на оригинал</b-td>
              </b-tr>
              <b-tr>
                <b-td>3</b-td>
                <b-td>Футболка</b-td>
                <b-td>Черный</b-td>
                <b-td>XL</b-td>
                <b-td>1</b-td>
                <b-td>05/12/2024</b-td>
                <b-td>00001055</b-td>
                <b-td>Абая, 103</b-td>
                <b-td>Ссылка на демо</b-td>
                <b-td>Ссылка на оригинал</b-td>
              </b-tr>
            </b-tbody>
          </b-table-simple>
          <div class="align-items-center justify-content-between row g-0 text-center text-sm-start p-3 border-top">
      <div class="col-sm">
        <div class="text-muted">
          Showing
          <span class="fw-semibold">10</span>
          of
          <span class="fw-semibold">2,852</span>
          Results
        </div>
      </div>
      <div class="col-sm-auto mt-3 mt-sm-0">
        <b-pagination class="m-0" pills v-model="currentPage" :per-page="perPageItem" :total-rows="customerList.length" />
      </div>
    </div>
        </UIComponentCard>


    <div class="tab-content pt-0">
      <div class="tab-pane" id="team-list" :class="customersTab && 'show active'">
        <List />
      </div>

      <div class="tab-pane" id="team-grid" :class="!customersTab && 'show active'">
        <Grid />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import PageBreadcrumb from '@/components/PageBreadcrumb.vue'
import List from '@/views/ecommerce/customers/components/List.vue'
import Grid from '@/views/ecommerce/customers/components/Grid.vue'
import { customerList } from '@/views/ecommerce/customers/components/data'


const customersTab = ref(true)
const perPageItem = ref(5)
const currentPage = ref(1)

</script>

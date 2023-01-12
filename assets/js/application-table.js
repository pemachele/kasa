var application_table;
var  application_page;

var application_page = {
  init: function () {
    application_table = $("#application-table").DataTable({
      responsive: !0,
      //"serverSide": true,

      ajax: {
        //this is where the data is  fetched url=https://keenthemes.com/metronic/tools/preview/api/datatables/demos/default.php
        url: "http://mobile.saca.agency/SACA/index.php/API",
        type: "POST",
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        data: { code: 118, api: 150 },
        dataSrc: "products",
      },
      columns: [
        { data: "full_name" },
        { data: "phone_number" },
        { data: "email" },
        { data: "school_graduated" },
        { data: "alevel_combination" },
        { data: "possible_budget" },
        { data: "intake" },
        { data: "course_option" },
        {
          data: "status",
          responsivePriority: -1,
        },
        {
          data: null,
          render: function (a, t, e) {
            return ' " id="disable-product-icon"  ></i>';
          },
        },
      ],
      initComplete: function (b, s) {
        $(".disable_product").on("click", function () {
          var selected_row;
          //taking selected row
          selected_row = $(this).parents("tr:first");

          // $('table#datatabletr#'+table_id).remove();

          //taking row data
          product_row_data = product_table.row(selected_row).data();
          //assigning the selected row attribute id
          $(selected_row).attr("id", product_row_data.product_id);

          $("#disable-product-modal").modal("show");
        });
      },
    });
  },
};

jQuery(document).ready(function () {
  application_page.init();
  console.log()
});

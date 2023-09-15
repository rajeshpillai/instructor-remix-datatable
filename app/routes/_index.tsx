import type { V2_MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import DataTable from "~/components/datatable";

let setup = {
  headers: [
    {
      title: "ID",
      accessor: "id",
      width: "300px",
      index: 1,
      dataType: "number",
      controlType: "textarea",
    },
    {
      title: "Title",
      accessor: "title",
      width: "300px",
      index: 1,
      dataType: "string",
      controlType: "textarea",
    },
    {
      title: "Slug",
      accessor: "slug",
      index: 2,
      dataType: "string",
      controlType: "textarea",
    },
    {
      title: "Body",
      accessor: "body",
      index: 3,
      dataType: "string",
      controlType: "textarea",
    },
    {
      title: "Favorited",
      accessor: "favorited",
      index: 5,
      dataType: "boolean",
      controlType: "radio",
      options: [
        { text: "No", value: false },
        { text: "Yes", value: true },
      ],
    },
  ],
  pageLength: 5,
  sort: {
    sortCol: "title",
    sortOrder: "Asc",
  },
  data: [],
  datax: [
    {
      id: 1,
      name: "a",
      age: 29,
      qualification: "B.Com",
      rating: 3,
      gender: "male",
      city: "Kerala",
      skills: ["reactjs", "angular", "vuejs"],
    },
    {
      id: 2,
      name: "b",
      age: 35,
      qualification: "B.Sc",
      rating: 5,
      gender: "female",
      city: "Mumbai",
      skills: ["reactjs", "angular"],
    },
    {
      id: 3,
      name: "c",
      age: 42,
      qualification: "B.E",
      rating: 3,
      gender: "female",
      city: "Bangalore",
      skills: ["reactjs"],
    },
  ],
  totalRecords: 0,
};
const DEFAULT_DATA = {
  data: [
    // {
    //   id: 1,
    //   name: "a",
    //   age: 29,
    //   qualification: "B.Com",
    //   rating: 3,
    //   gender: "male",
    //   city: "Kerala",
    //   skills: ["reactjs", "angular", "vuejs"],
    // },
    // {
    //   id: 2,
    //   name: "b",
    //   age: 35,
    //   qualification: "B.Sc",
    //   rating: 5,
    //   gender: "female",
    //   city: "Mumbai",
    //   skills: ["reactjs", "angular"],
    // },
    // {
    //   id: 3,
    //   name: "c",
    //   age: 42,
    //   qualification: "B.E",
    //   rating: 3,
    //   gender: "female",
    //   city: "Bangalore",
    //   skills: ["reactjs"],
    // },
  ],
  current: {},
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [state, setState] = useState(setup);

  useEffect(() => {
    // fetchData(0, state.pageLength);
  }, []);


  useEffect(() => {
    console.log(`PageLength changed to ${state.pageLength}`);
  }, [state.pageLength]);

  const fetchData = async (start, limit) => {
    // let data = await fetchDataOnly(1);
    // setState({
    //   ...state,
    //   data,
    //   totalRecords: data.articles_count,
    // });
  };

  const fetchDataOnly = async (pageNo) => {
    // pageNo = parseInt(pageNo);
    // let start = state.pageLength * (pageNo - 1);
    // // let resp = await fetch(
    // //   `https://jsonplaceholder.typicode.com/todos?_start=${start}&_limit=${state.pageLength}&_sort=${state.sort.sortCol}&_order=${state.sort.sortOrder}`
    // // );
    // let resp = await fetch(
    //   `https://algo-blog-api.herokuapp.com/api/articles?offset=${start}&limit=${state.pageLength}`
    //   //&_sort=${state.sort.sortCol}&_order=${state.sort.sortOrder
    // );
    // let data = await resp.json();
    // return data.articles;
  };

  // // For pagination
  // useEffect(() => {
  //   //if (pagination.enabled && !props.pagination.serverSide) {
  //   fetchData();
  //   //}
  // }, [state.pageLength, state.sort]);

  const onPageLengthChange = (pageLength) => {
    console.log(`state:update: pageLength changed to ${pageLength}`);
    setState({
      ...state,
      pageLength,
    });
  };

  const onSort = (col, order) => {
    // console.log(col, order);
    // setState({
    //   ...state,
    //   sort: {
    //     ...state.sort,
    //     sortCol: col,
    //     sortOrder: order,
    //   },
    // });
  };

  const onUpdateTable = () => {};

  const onUpdateData = (data) => {
    console.log("data updated", data);
  };

  const searchData = async (searchCriteria) => {
    // // pageNo = parseInt(pageNo);
    // // let start = state.pageLength * (pageNo - 1);
    // let searchCriteriaQueryString = "";
    // if (searchCriteria) {
    //   for (let key in searchCriteria) {
    //     searchCriteriaQueryString += `${key}=${searchCriteria[key]}&`;
    //   }
    //   //remove Last "&"
    //   searchCriteriaQueryString = searchCriteriaQueryString.substr(
    //     0,
    //     searchCriteriaQueryString.length - 1
    //   );
    // }
    // let resp = await fetch(
    //   `https://algo-blog-api.herokuapp.com/api/articles?${searchCriteriaQueryString}&offset=0&limit=${state.pageLength}`
    //   //&_sort=${state.sort.sortCol}&_order=${state.sort.sortOrder
    // );
    // let data = await resp.json();
    // setState({
    //   ...state,
    //   data: data.articles,
    //   totalRecords: data.articles_count,
    // });
  };

  const onSubmit = (model) => {
    console.log("onsubmit", model);
    searchData(model);
  };
  
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix DataTable</h1>
      <DataTable
        serverSideDataLoad={true}
        // headers={state.headers}
        className="data-table"
        title="USER PROFILES"
        keyField="id"
        edit={false}
        server={{
          data: {
            endpoint: "https://jsonplaceholder.typicode.com/posts",
            dataKey: "",
            totalRecordsKey: "articles_count",
          },
          // countRecords: {
          //   endpoint: "https://algo-blog-api.herokuapp.com/api/articles",
          //   totalRecordsKey: "articles",
          // },
        }}
        maxHeight={"500px"}
        pagination={{
          enabled: true,
          pageLength: state.pageLength, //for server side keep in state
          type: "long", // long, short
          onPageLengthChange: onPageLengthChange,
          startQueryKey: "_page",
          limitQueryKey: "_limit",
        }}
        sort={{
          enabled: true,
          sortCol: state.sort.sortCol,
          sortOrder: state.sort.sortOrder,
        }}
        width="100%"
        headers={state.headers}
        data={state.data}
        noData="No records!"
        onUpdateData={onUpdateData}
      />
    </div>
  );
}

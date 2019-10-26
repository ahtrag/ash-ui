import React, { useState, useEffect } from "react";
import Table from "../components/Table";
import { createUseStyles } from "react-jss";
import { globalStyles } from "../utils/styles";

const useGlobalStyles = createUseStyles(globalStyles);

const Test = props => {
  useGlobalStyles();
  const [customers, setCustomers] = useState(null);
  const [occupations, setOccupations] = useState(null);

  const columns = [
    {
      label: "Name",
      key: "name"
    },
    {
      label: "Email",
      key: "email"
    },
    {
      label: "Phone",
      key: "mobilePhone"
    },
    // {
    //   label: "Occupation",
    //   key: "occupations",
    //   type: "select",
    //   option: Object.assign(
    //     {},
    //     occupations &&
    //       occupations
    //         .map(occupation => ({
    //           [occupation._id]: occupation.occupationName
    //         }))
    //         .reduce(
    //           (result, value) =>
    //             console.log({
    //               key: Object.keys(value)[0],
    //               value: Object.values(value)[0]
    //             }),
    //           {}
    //         )
    //   )
    // },
    {
      label: "Gender",
      key: "gender",
      type: "select",
      option: {
        male: "Male",
        female: "Female"
      }
    },
    {
      label: "Birthday",
      key: "birthday",
      type: "date",
      format: "dd MMM yyyy"
    },
    {
      label: "Active?",
      key: "isActive",
      type: "select",
      option: {
        true: "Active",
        false: "Inactive"
      }
    },
    {
      label: "Married?",
      key: "isMarried",
      type: "select",
      option: {
        true: "Married",
        false: "Single"
      }
    },
    {
      label: "Verified?",
      key: "isVerified",
      type: "select",
      option: {
        true: "Verified",
        false: "Unverified"
      }
    }
  ];

  useEffect(() => {
    fetch(
      "https://finoo-master-dev.herokuapp.com/api/customers/?isActive=true",
      {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRiZTM0NzFjOWQ0NDAwMDA4ZTZmNDYiLCJlbWFpbCI6Im1hc3RlckBob29waXBlci5jb20iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNTY4NjU4OTM3LCJleHAiOjE1Njg2Njk3Mzd9.Lo-VaQk3_RPQ5ooeHvOGQ5fJHWOFBglTDrvmJB0CELw"
        }
      }
    )
      .then(res => res.json())
      .then(json => setCustomers(json.data));
  }, []);

  useEffect(() => {
    fetch(
      "https://finoo-master-dev.herokuapp.com/api/occupations?isActive=true",
      {
        headers: {
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZDRiZTM0NzFjOWQ0NDAwMDA4ZTZmNDYiLCJlbWFpbCI6Im1hc3RlckBob29waXBlci5jb20iLCJ1c2VydHlwZSI6ImFkbWluIiwiaWF0IjoxNTY4NjU4OTM3LCJleHAiOjE1Njg2Njk3Mzd9.Lo-VaQk3_RPQ5ooeHvOGQ5fJHWOFBglTDrvmJB0CELw"
        }
      }
    )
      .then(res => res.json())
      .then(json => setOccupations(json.data));
  }, []);

  console.log(
    occupations &&
      occupations.reduce(
        (result, value) => ({ ...result, [value._id]: value.occupationName }),
        {}
      )
  );

  console.log(customers);

  return (
    <div style={{ padding: 8 }}>
      {customers && occupations && (
        <Table
          data={customers}
          columns={columns}
          title="Customers"
          defaultSort={{
            type: "descending",
            column: "xxx"
          }}
          editable={{
            onUpdate: (oldData, newData) => console.log({ oldData, newData }),
            onDelete: oldData => console.log(oldData),
            onAdd: newData => console.log(newData)
          }}
        />
      )}
    </div>
  );
};

export default Test;

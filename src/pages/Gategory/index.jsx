import { useEffect, useState } from "react";
import BackbuttonField from "../../components/BackbuttonField";
import Card_v1Map from "../../components/Card_v1Map";
import Header from "../../components/Header";
import { CardSection } from "./Gategory.styles";
import { fetchData } from "../services";

const Gategory = ({ HeaderProps, BackbuttonProps, Card_v1MapProps }) => {
  const [categorieList, setCategorieList] = useState();

  useEffect(() => {
    fetchData().then(function (result) {
      setCategorieList(result.categories);
    });
  }, []);

  const reformattedData = categorieList?.map((data) => {
    return {
      variant: "primary",
      image: data.media[0].location,
      title: data.name,
      status: "opened",
      open: true,
      article: data.description,
      time: "Open at 9:00 AM - Close at 23:00 PM",
      linkLabel: "Check the menu",
      btnvariant: "secondary",
      btncolor: "#000",
      btnbgColor: "#F3F3F3",
      btnborderColor: "#6A6969",
      btnborderWidth: "2px",
      btnlabel: data.tagOne,
    };
  });

  return (
    <>
      <Header {...HeaderProps} />
      <BackbuttonField {...BackbuttonProps} />
      <CardSection>
        {/* <Card_v1Map {...Card_v1MapProps} /> */}
        {reformattedData && <Card_v1Map items={reformattedData} />}
      </CardSection>
    </>
  );
};

export default Gategory;

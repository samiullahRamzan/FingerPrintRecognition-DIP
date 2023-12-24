import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { StudentsStyles } from "../style/styles";
import { getStudentsApi } from "../AxiosFetchAPIS/StudentApi's";
import { CustomText } from "../Components/CustomText";

export default function StudentsScreen({ navigation }) {
  const [data, setData] = useState([]);

  // This useEffect is used to call the get students API
  const fetchData = async () => {
    try {
      const students = await getStudentsApi();
      setData(students.Data); // As students are stored in a Data
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={StudentsStyles.container}>
      {data.length === 0 ? (
        <Text style={{ color: "white" }}>Loading...</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          horizontal={false}
          renderItem={({ item }) => (
            <View style={StudentsStyles.main}>
              <CustomText heading="Name" content={item.name} />
              <CustomText heading="Student ID" content={item.sid} />
              <CustomText heading="Phone" content={item.phone} />
              <CustomText heading="Email" content={item.email} />
            </View>
          )}
        />
      )}
    </View>
  );
}

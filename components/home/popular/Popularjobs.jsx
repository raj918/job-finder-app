import {useState, } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hook/useFetch";




const Popularjobs = () => {
  const router = useRouter();

  const {data, isLoading, error} = useFetch("search", {query: 'Python developer', page: '1', num_pages: '1'})
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    
  }
  
  // const isLoading = false;
  // const error = false;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      
        <View style={styles.cardsContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) :  error ? (
            <Text>Something went wrong</Text>
          ) :
          (


          <View style={{ flex : 1  }}>

            <FlatList
                data={data}
                renderItem={({ item }) => (<PopularJobCard item={item} />)}
                keyExtractor={(item) => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                nestedScrollEnabled
                horizontal
               
                />
          </View>

          )}
        </View>
      </View>
    

  );
};

export default Popularjobs;

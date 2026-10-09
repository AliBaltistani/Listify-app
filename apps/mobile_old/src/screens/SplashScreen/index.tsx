import React from "react";
import { View, ScrollView, Image, Text, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#FC6901",
				}}>
				<View 
					style={{
						alignItems: "center",
						paddingVertical: 378,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ebtppk4f_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 254,
							height: 127,
							marginBottom: 24,
						}}
					/>
					<Text 
						style={{
							color: "#EEEEEE",
							fontSize: 20,
							fontWeight: "bold",
							textAlign: "center",
							width: 163,
						}}>
						{"Sell & Buy Online \nMarketplace"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
import React from "react";
import { View, ScrollView, ImageBackground, Image, Text, } from "react-native";
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
					backgroundColor: "#FFFFFF",
				}}>
				<View 
					style={{
						backgroundColor: "#FFFFFF00",
						paddingTop: 876,
						paddingBottom: 8,
						shadowColor: "#00000040",
						shadowOpacity: 0.3,
						shadowOffset: {
						    width: 0,
						    height: 25
						},
						shadowRadius: 50,
						elevation: 50,
					}}>
					<ImageBackground 
						source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wf5lgzfp_expires_30_days.png"}} 
						resizeMode = {'stretch'}
						style={{
							flexDirection: "row",
							paddingHorizontal: 27,
						}}
						>
						<View 
							style={{
								marginTop: 41,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/dzlu4j7r_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#FC6901",
									fontSize: 10,
								}}>
								{"HOME"}
							</Text>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
						</View>
						<View 
							style={{
								marginTop: 46,
								marginRight: 27,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/mmckizoe_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#010101",
									fontSize: 10,
								}}>
								{"CHATS"}
							</Text>
						</View>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/k0zywrk8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 50,
								width: 51,
								height: 51,
								marginTop: 8,
								marginRight: 33,
							}}
						/>
						<View 
							style={{
								marginTop: 46,
								marginRight: 34,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zbevju8z_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 10,
								}}>
								{"MY ADS"}
							</Text>
						</View>
						<View 
							style={{
								paddingVertical: 13,
								paddingHorizontal: 12,
								marginTop: 27,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/cx42bhno_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 24,
									height: 24,
									marginBottom: 8,
									marginLeft: 14,
								}}
							/>
							<Text 
								style={{
									color: "#000000",
									fontSize: 10,
								}}>
								{"ACCOUNT"}
							</Text>
						</View>
					</ImageBackground>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
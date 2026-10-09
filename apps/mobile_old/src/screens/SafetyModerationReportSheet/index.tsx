import React from "react";
import { View, ScrollView, Text, Image, ImageBackground, TouchableOpacity, } from "react-native";
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
					borderColor: "#DCE2F3",
					borderWidth: 1,
					padding: 1,
				}}>
				<View 
					style={{
						backgroundColor: "#2A313D99",
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingVertical: 16,
							paddingHorizontal: 24,
						}}>
						<Text 
							style={{
								color: "#151C27",
								fontSize: 12,
								fontWeight: "bold",
							}}>
							{"9:41"}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tl4yb6gg_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 45,
								height: 15,
							}}
						/>
					</View>
					<View 
						style={{
							paddingBottom: 425,
							paddingHorizontal: 16,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								paddingVertical: 8,
								marginBottom: 16,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/h5uzvvb7_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 40,
									height: 40,
								}}
							/>
							<Text 
								style={{
									color: "#A63500",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Listify"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/kumdgogg_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 88,
									height: 40,
								}}
							/>
						</View>
						<ImageBackground 
							source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ry5agv8z_expires_30_days.png"}} 
							resizeMode = {'stretch'}
							imageStyle={{borderRadius: 16,}}
							style={{
								paddingTop: 12,
								paddingLeft: 12,
								marginBottom: 16,
							}}
							>
							<View 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#D6E0F3",
									borderRadius: 9999,
									paddingVertical: 2,
									paddingHorizontal: 8,
									marginBottom: 237,
								}}>
								<Text 
									style={{
										color: "#121C2A",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Featured"}
								</Text>
							</View>
						</ImageBackground>
						<View 
							style={{
								marginBottom: 16,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 4,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"Apple iPad Pro 11\" M2"}
								</Text>
								<Text 
									style={{
										color: "#A63500",
										fontSize: 20,
										fontWeight: "bold",
									}}>
									{"Rs 185,000"}
								</Text>
							</View>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
								}}>
								{"Gulberg III, Lahore • 2 hours ago"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#F0F3FF",
								borderRadius: 12,
								padding: 12,
							}}>
							<TouchableOpacity 
								style={{
									backgroundColor: "#D6E0F3",
									borderRadius: 9999,
									paddingVertical: 10,
									paddingHorizontal: 14,
									marginRight: 12,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#121C2A",
										fontSize: 16,
									}}>
									{"IA"}
								</Text>
							</TouchableOpacity>
							<View 
								style={{
									flex: 1,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Irfan Ali"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 12,
									}}>
									{"Member since Jan 2023"}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
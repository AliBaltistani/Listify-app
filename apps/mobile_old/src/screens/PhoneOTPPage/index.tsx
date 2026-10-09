import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, } from "react-native";
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
					paddingBottom: 493,
				}}>
				<View 
					style={{
						marginBottom: 32,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingVertical: 17,
							paddingHorizontal: 32,
							marginBottom: 12,
						}}>
						<Text 
							style={{
								color: "#000000",
								fontSize: 17,
								fontWeight: "bold",
							}}>
							{"12:45"}
						</Text>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gzmct90v_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 23,
									height: 14,
									marginRight: 8,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/k8y7yw3q_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 17,
									height: 13,
									marginRight: 7,
								}}
							/>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9iqzx9rg_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 23,
									height: 11,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							marginHorizontal: 20,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/6vcxn4hb_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 51,
								width: 50,
								height: 50,
								marginBottom: 24,
							}}
						/>
						<View >
							<View 
								style={{
									marginBottom: 32,
								}}>
								<Text 
									style={{
										color: "#12110D",
										fontSize: 22,
										fontWeight: "bold",
										marginBottom: 8,
									}}>
									{"Enter the Code"}
								</Text>
								<View 
									style={{
										paddingBottom: 5,
									}}>
									<Text 
										style={{
											color: "#5A5E60",
											fontSize: 16,
											marginBottom: 11,
										}}>
										{"A verification code has been sent to"}
									</Text>
									<Text 
										style={{
											color: "#12110D",
											fontSize: 16,
											fontWeight: "bold",
											marginLeft: 1,
										}}>
										{"+971 1 123 123 1234"}
									</Text>
								</View>
							</View>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										alignSelf: "stretch",
										flexDirection: "row",
										alignItems: "center",
										paddingHorizontal: 31,
										marginBottom: 18,
									}}>
									<TouchableOpacity 
										style={{
											flex: 1,
											alignItems: "center",
											borderColor: "#12110D66",
											borderRadius: 50,
											borderWidth: 1,
											paddingVertical: 22,
											marginRight: 14,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#5A5E60",
												fontSize: 20,
											}}>
											{"1"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											flex: 1,
											alignItems: "center",
											borderColor: "#12110D66",
											borderRadius: 50,
											borderWidth: 1,
											paddingVertical: 22,
											marginRight: 14,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#5A5E60",
												fontSize: 20,
											}}>
											{"2"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											flex: 1,
											alignItems: "center",
											borderColor: "#12110D66",
											borderRadius: 50,
											borderWidth: 1,
											paddingVertical: 22,
											marginRight: 14,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#5A5E60",
												fontSize: 20,
											}}>
											{"3"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											flex: 1,
											alignItems: "center",
											borderColor: "#12110D66",
											borderRadius: 50,
											borderWidth: 1,
											paddingVertical: 22,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#5A5E60",
												fontSize: 20,
											}}>
											{"4"}
										</Text>
									</TouchableOpacity>
								</View>
								<Text 
									style={{
										color: "#12110D",
										fontSize: 18,
									}}>
									{"You can resend the code in 24 seconds"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<TouchableOpacity 
					style={{
						alignItems: "center",
						backgroundColor: "#FC6A02",
						borderRadius: 50,
						paddingVertical: 14,
						marginLeft: 29,
						marginRight: 11,
					}} onPress={()=>alert('Pressed!')}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 18,
							textAlign: "center",
							width: 40,
						}}>
						{"Next"}
					</Text>
				</TouchableOpacity>
			</ScrollView>
		</SafeAreaView>
	)
}
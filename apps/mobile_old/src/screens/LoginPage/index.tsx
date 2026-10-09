import React, {useState} from "react";
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
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
						paddingTop: 95,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/uqnvawps_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 138,
							height: 69,
							marginBottom: 6,
						}}
					/>
					<Text 
						style={{
							color: "#EEEEEE",
							fontSize: 32,
							fontWeight: "bold",
							marginBottom: 7,
						}}>
						{"Log In"}
					</Text>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							marginBottom: 41,
						}}>
						{"Create an account or log in to explore about our app"}
					</Text>
					<View 
						style={{
							alignSelf: "stretch",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderRadius: 40,
							paddingTop: 24,
							paddingBottom: 233,
							paddingHorizontal: 20,
						}}>
						<View 
							style={{
								alignSelf: "stretch",
								paddingBottom: 1,
								marginBottom: 24,
								marginHorizontal: 1,
							}}>
							<Text 
								style={{
									color: "#151515",
									fontSize: 12,
									fontWeight: "bold",
									marginBottom: 8,
								}}>
								{"Email"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#E8E8E8",
									borderRadius: 10,
									borderWidth: 1,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/y4x018hw_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 10,
										width: 14,
										height: 14,
										marginLeft: 13,
										marginRight: 16,
									}}
								/>
								<TextInput
									placeholder={"Full Name"}
									value={textInput1}
									onChangeText={onChangeTextInput1}
									style={{
										color: "#98A1B2",
										fontSize: 12,
										marginRight: 4,
										flex: 1,
										paddingVertical: 13,
									}}
								/>
							</View>
						</View>
						<View 
							style={{
								alignSelf: "stretch",
								paddingBottom: 1,
								marginBottom: 24,
								marginHorizontal: 1,
							}}>
							<View 
								style={{
									paddingBottom: 1,
									marginBottom: 3,
								}}>
								<Text 
									style={{
										color: "#151515",
										fontSize: 12,
										fontWeight: "bold",
										marginBottom: 7,
									}}>
									{"Password"}
								</Text>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#E8E8E8",
										borderRadius: 10,
										borderWidth: 1,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/b2vwrtfi_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 10,
											width: 14,
											height: 14,
											marginLeft: 13,
											marginRight: 16,
										}}
									/>
									<TextInput
										placeholder={"Full Name"}
										value={textInput2}
										onChangeText={onChangeTextInput2}
										style={{
											color: "#98A1B2",
											fontSize: 12,
											marginRight: 4,
											flex: 1,
											paddingVertical: 13,
										}}
									/>
								</View>
							</View>
							<View 
								style={{
									alignItems: "flex-end",
								}}>
								<Text 
									style={{
										color: "#000000",
										fontSize: 12,
										marginRight: 3,
									}}>
									{"forget password"}
								</Text>
							</View>
						</View>
						<TouchableOpacity 
							style={{
								alignSelf: "stretch",
								alignItems: "center",
								backgroundColor: "#FC6901",
								borderRadius: 14,
								paddingVertical: 13,
								marginBottom: 24,
								marginHorizontal: 1,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									fontWeight: "bold",
								}}>
								{"Sign In"}
							</Text>
						</TouchableOpacity>
						<Text 
							style={{
								color: "#667084",
								fontSize: 14,
								marginBottom: 24,
							}}>
							{"Dont have any account Sign Up"}
						</Text>
						<Text 
							style={{
								color: "#000000",
								fontSize: 14,
								marginBottom: 23,
							}}>
							{"OR"}
						</Text>
						<View 
							style={{
								alignSelf: "stretch",
								flexDirection: "row",
								alignItems: "center",
							}}>
							<TouchableOpacity 
								style={{
									flex: 1,
									alignItems: "center",
									backgroundColor: "#131214",
									borderColor: "#494949",
									borderRadius: 50,
									borderWidth: 1,
									paddingVertical: 14,
									marginRight: 16,
								}} onPress={()=>alert('Pressed!')}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/15ivwx59_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 32,
											height: 32,
											marginRight: 10,
										}}
									/>
									<Text 
										style={{
											color: "#FCFFFF",
											fontSize: 16,
										}}>
										{"Apple"}
									</Text>
								</View>
							</TouchableOpacity>
							<TouchableOpacity 
								style={{
									flex: 1,
									alignItems: "center",
									backgroundColor: "#131214",
									borderColor: "#494949",
									borderRadius: 50,
									borderWidth: 1,
									paddingVertical: 14,
								}} onPress={()=>alert('Pressed!')}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2ox3d3vk_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 32,
											height: 32,
											marginRight: 10,
										}}
									/>
									<Text 
										style={{
											color: "#FCFFFF",
											fontSize: 16,
										}}>
										{"Google"}
									</Text>
								</View>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
import React, {useState} from "react";
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
	const [textInput2, onChangeTextInput2] = useState('');
	const [textInput3, onChangeTextInput3] = useState('');
	const [textInput4, onChangeTextInput4] = useState('');
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/5ms3d5in_expires_30_days.png"}} 
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
							marginBottom: 6,
						}}>
						{"Register Now"}
					</Text>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
							marginBottom: 42,
						}}>
						{"Create an account or Sign up to explore about our app"}
					</Text>
					<View 
						style={{
							alignSelf: "stretch",
							backgroundColor: "#FFFFFF",
							borderRadius: 40,
							paddingVertical: 27,
							paddingHorizontal: 20,
						}}>
						<View 
							style={{
								alignItems: "center",
								marginBottom: 95,
							}}>
							<View 
								style={{
									alignSelf: "stretch",
									marginBottom: 24,
									marginHorizontal: 1,
								}}>
								<View 
									style={{
										paddingBottom: 1,
										marginBottom: 14,
									}}>
									<Text 
										style={{
											color: "#151515",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 8,
										}}>
										{"Full Name"}
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/fq0xnt41_expires_30_days.png"}} 
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
										marginBottom: 13,
									}}>
									<Text 
										style={{
											color: "#151515",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Phone Number"}
									</Text>
								</View>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#12110D1C",
										borderRadius: 10,
										borderWidth: 1,
										paddingVertical: 9,
										paddingLeft: 7,
										marginBottom: 17,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/tz7n5pi2_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 23,
											height: 21,
											marginRight: 12,
										}}
									/>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											marginRight: 12,
										}}>
										<Text 
											style={{
												color: "#12110D",
												fontSize: 12,
												marginRight: 6,
											}}>
											{"PAK +923"}
										</Text>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/82pikrtz_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 20,
												height: 20,
											}}
										/>
									</View>
									<Text 
										style={{
											color: "#12110D",
											fontSize: 12,
										}}>
										{"(000) 000-0000"}
									</Text>
								</View>
								<View 
									style={{
										paddingBottom: 1,
										marginBottom: 14,
									}}>
									<Text 
										style={{
											color: "#151515",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 7,
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/oeou1smh_expires_30_days.png"}} 
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
										marginBottom: 14,
									}}>
									<Text 
										style={{
											color: "#151515",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 8,
										}}>
										{"Username"}
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/3xoew1hv_expires_30_days.png"}} 
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
											value={textInput3}
											onChangeText={onChangeTextInput3}
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
								<View >
									<Text 
										style={{
											color: "#151515",
											fontSize: 12,
											fontWeight: "bold",
											marginBottom: 8,
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
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9dbjwx62_expires_30_days.png"}} 
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
											value={textInput4}
											onChangeText={onChangeTextInput4}
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
									{"Sign Up"}
								</Text>
							</TouchableOpacity>
							<Text 
								style={{
									color: "#667084",
									fontSize: 14,
								}}>
								{"Already have and account Sign In"}
							</Text>
						</View>
						<View 
							style={{
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/0wn3393o_expires_30_days.png"}} 
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/s58l8lbm_expires_30_days.png"}} 
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
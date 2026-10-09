import React, {useState} from "react";
import { View, ScrollView, Image, Text, TextInput, TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	const [textInput1, onChangeTextInput1] = useState('');
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
					paddingTop: 29,
				}}>
				<Image
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1z6gukbf_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						borderRadius: 9999,
						width: 40,
						height: 40,
						marginBottom: 11,
						marginLeft: 20,
					}}
				/>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 9,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/k5mighqp_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 138,
							height: 69,
						}}
					/>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 5,
					}}>
					<Text 
						style={{
							color: "#EEEEEE",
							fontSize: 32,
							fontWeight: "bold",
						}}>
						{"Forgot Password"}
					</Text>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 26,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 14,
							textAlign: "center",
							width: 322,
						}}>
						{"Enter your registered email address to receive\npassword reset instructions"}
					</Text>
				</View>
				<View 
					style={{
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						borderRadius: 40,
						paddingTop: 24,
						paddingBottom: 384,
						paddingHorizontal: 21,
					}}>
					<View 
						style={{
							alignSelf: "stretch",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#FFF7ED",
							borderColor: "#FFEDD5",
							borderRadius: 16,
							borderWidth: 1,
							paddingVertical: 15,
							marginBottom: 24,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/nv10yhxu_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 16,
								width: 19,
								height: 18,
								marginLeft: 15,
							}}
						/>
						<View 
							style={{
								paddingLeft: 12,
								paddingRight: 24,
							}}>
							<Text 
								style={{
									color: "#374151",
									fontSize: 12,
									width: 256,
								}}>
								{"We will send a password reset verification link or\ncode to verify your identity."}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignSelf: "stretch",
							paddingBottom: 1,
							marginBottom: 24,
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/h9c6k3y8_expires_30_days.png"}} 
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
									paddingVertical: 18,
								}}
							/>
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
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{"Send Reset Link"}
						</Text>
					</TouchableOpacity>
					<Text 
						style={{
							color: "#667084",
							fontSize: 14,
						}}>
						{"Remenber your password ? Sign Up"}
					</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
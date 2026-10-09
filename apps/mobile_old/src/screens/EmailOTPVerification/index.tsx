import React, {useState} from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, TextInput, } from "react-native";
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
					source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/8b7lit99_expires_30_days.png"}} 
					resizeMode = {"stretch"}
					style={{
						borderRadius: 9999,
						width: 40,
						height: 40,
						marginBottom: 26,
						marginLeft: 21,
					}}
				/>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 6,
					}}>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/pcy22qea_expires_30_days.png"}} 
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
						marginBottom: 7,
					}}>
					<Text 
						style={{
							color: "#EEEEEE",
							fontSize: 32,
							fontWeight: "bold",
						}}>
						{"Get Started now"}
					</Text>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 41,
					}}>
					<Text 
						style={{
							color: "#FFFFFF",
							fontSize: 12,
						}}>
						{"Create an account or log in to explore about our app"}
					</Text>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderRadius: 40,
						paddingTop: 24,
						paddingBottom: 223,
						paddingHorizontal: 20,
					}}>
					<View 
						style={{
							paddingBottom: 4,
							marginBottom: 39,
						}}>
						<View 
							style={{
								marginBottom: 20,
							}}>
							<View 
								style={{
									marginBottom: 24,
								}}>
								<Text 
									style={{
										color: "#12110D",
										fontSize: 22,
										fontWeight: "bold",
										marginBottom: 8,
									}}>
									{"Add your email address"}
								</Text>
								<Text 
									style={{
										color: "#5A5E60",
										fontSize: 16,
									}}>
									{"A verification code will be sent to this email."}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F3F4F6",
									borderRadius: 16,
									padding: 10,
								}}>
								<View 
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										borderRadius: 12,
										paddingVertical: 10,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/qm868828_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 12,
											width: 16,
											height: 16,
											marginRight: 6,
										}}
									/>
									<Text 
										style={{
											color: "#6B7280",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Phone Number"}
									</Text>
								</View>
								<TouchableOpacity 
									style={{
										flex: 1,
										flexDirection: "row",
										justifyContent: "center",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderRadius: 12,
										paddingVertical: 10,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}} onPress={()=>alert('Pressed!')}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/it60e034_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 12,
											width: 16,
											height: 16,
											marginRight: 6,
										}}
									/>
									<Text 
										style={{
											color: "#111827",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Email Address"}
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						<View 
							style={{
								paddingBottom: 1,
								marginBottom: 20,
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
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/r5lrv292_expires_30_days.png"}} 
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
						<View 
							style={{
								flexDirection: "row",
								backgroundColor: "#FFF7EDB0",
								borderColor: "#FFEDD5",
								borderRadius: 16,
								borderWidth: 1,
								padding: 13,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ngd7j3wi_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 16,
									width: 24,
									height: 26,
								}}
							/>
							<View 
								style={{
									flex: 1,
									paddingLeft: 10,
									paddingRight: 44,
								}}>
								<Text 
									style={{
										color: "#4B5563",
										fontSize: 11,
									}}>
									{"By tapping Send OTP, you agree to receive SMS or\nsecurity emails for authentication purposes. Standard\nrates may apply."}
								</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity 
						style={{
							alignItems: "center",
							backgroundColor: "#FC6A02",
							borderRadius: 50,
							paddingVertical: 14,
						}} onPress={()=>alert('Pressed!')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 18,
								textAlign: "center",
								width: 86,
							}}>
							{"Send OTP"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
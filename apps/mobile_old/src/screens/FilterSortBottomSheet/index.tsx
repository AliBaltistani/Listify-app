import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
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
					paddingBottom: 1,
					paddingHorizontal: 1,
				}}>
				<View 
					style={{
						height: 300,
						backgroundColor: "#2A313D99",
					}}>
				</View>
				<View 
					style={{
						backgroundColor: "#FFFFFF",
						borderTopLeftRadius: 24,
						borderTopRightRadius: 24,
						paddingTop: 1,
					}}>
					<View 
						style={{
							alignItems: "center",
							paddingVertical: 8,
							marginRight: 16,
						}}>
						<View 
							style={{
								width: 40,
								height: 6,
								backgroundColor: "#DCE2F3",
								borderRadius: 9999,
							}}>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingVertical: 8,
							paddingHorizontal: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/e05175gp_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 16,
									height: 16,
									marginRight: 4,
								}}
							/>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"Filters & Sort"}
							</Text>
						</View>
						<Text 
							style={{
								color: "#A63500",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"Reset"}
						</Text>
					</View>
					<View 
						style={{
							paddingVertical: 20,
							paddingHorizontal: 24,
						}}>
						<View 
							style={{
								marginBottom: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Sort By"}
								</Text>
								<Text 
									style={{
										color: "#555F6F",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"1 selected"}
								</Text>
							</View>
							<View 
								style={{
									paddingTop: 4,
								}}>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
										marginBottom: 8,
									}}>
									<TouchableOpacity 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FC6902",
											borderRadius: 9999,
											paddingVertical: 10,
											paddingHorizontal: 16,
											marginRight: 13,
											shadowColor: "#A6350040",
											shadowOpacity: 0.3,
											shadowOffset: {
											    width: 0,
											    height: 4
											},
											shadowRadius: 12,
											elevation: 12,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/c5jq2ihh_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 10,
												height: 8,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#FFFFFF",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Newest"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 17,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Price: Low to High"}
										</Text>
									</TouchableOpacity>
								</View>
								<View 
									style={{
										alignSelf: "flex-start",
										flexDirection: "row",
										alignItems: "center",
									}}>
									<TouchableOpacity 
										style={{
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 17,
											marginRight: 8,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Price: High to Low"}
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={{
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F3",
											borderRadius: 9999,
											borderWidth: 1,
											paddingVertical: 9,
											paddingHorizontal: 17,
										}} onPress={()=>alert('Pressed!')}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Most Popular"}
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						</View>
						<View 
							style={{
								marginBottom: 24,
							}}>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Price Range"}
								</Text>
								<Text 
									style={{
										color: "#A63500",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"USD ($)"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<View 
									style={{
										flex: 1,
										paddingTop: 7,
										marginRight: 12,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
											marginBottom: 7,
										}}>
										{"Min ($)"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFFFFF",
											borderColor: "#DCE2F3",
											borderRadius: 16,
											borderWidth: 1,
											paddingVertical: 11,
											paddingHorizontal: 14,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
												marginRight: 12,
											}}>
											{"$"}
										</Text>
										<View 
											style={{
												flex: 1,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 14,
												}}>
												{"50"}
											</Text>
										</View>
									</View>
								</View>
								<View 
									style={{
										flex: 1,
										paddingTop: 7,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
											marginBottom: 7,
										}}>
										{"Max ($)"}
									</Text>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#FFFFFF",
											borderColor: "#DCE2F3",
											borderRadius: 16,
											borderWidth: 1,
											paddingVertical: 11,
											paddingHorizontal: 14,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 14,
												marginRight: 12,
											}}>
											{"$"}
										</Text>
										<View 
											style={{
												flex: 1,
											}}>
											<Text 
												style={{
													color: "#151C27",
													fontSize: 14,
												}}>
												{"1,200"}
											</Text>
										</View>
									</View>
								</View>
							</View>
							<View 
								style={{
									paddingTop: 8,
								}}>
								<View 
									style={{
										backgroundColor: "#DCE2F3",
										borderRadius: 9999,
										paddingLeft: 58,
									}}>
									<View 
										style={{
											width: 234,
											height: 6,
											backgroundColor: "#FC6902",
											borderRadius: 9999,
										}}>
									</View>
								</View>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingVertical: 6,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"$0"}
									</Text>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"$5,000+"}
									</Text>
								</View>
							</View>
						</View>
						<View 
							style={{
								paddingTop: 2,
								marginBottom: 24,
							}}>
							<Text 
								style={{
									color: "#151C27",
									fontSize: 14,
									fontWeight: "bold",
									marginBottom: 9,
								}}>
								{"Condition"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									backgroundColor: "#F0F3FF",
									borderColor: "#DCE2F3",
									borderRadius: 16,
									borderWidth: 1,
									padding: 7,
								}}>
								<TouchableOpacity 
									style={{
										flexDirection: "row",
										alignItems: "center",
										backgroundColor: "#FFFFFF",
										borderColor: "#DCE2F3",
										borderRadius: 12,
										borderWidth: 1,
										paddingVertical: 9,
										paddingHorizontal: 33,
										marginRight: 8,
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
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/t2c8g0ut_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 12,
											width: 13,
											height: 13,
											marginRight: 3,
										}}
									/>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"All"}
									</Text>
								</TouchableOpacity>
								<View 
									style={{
										alignItems: "center",
										borderRadius: 12,
										paddingVertical: 9,
										paddingHorizontal: 38,
										marginRight: 8,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"New"}
									</Text>
								</View>
								<View 
									style={{
										alignItems: "center",
										borderRadius: 12,
										paddingVertical: 9,
										paddingHorizontal: 37,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"Used"}
									</Text>
								</View>
							</View>
						</View>
						<View >
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 14,
										fontWeight: "bold",
									}}>
									{"Location"}
								</Text>
								<Text 
									style={{
										color: "#A63500",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"Change"}
								</Text>
							</View>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#F0F3FF",
									borderColor: "#DCE2F3",
									borderRadius: 16,
									borderWidth: 1,
									padding: 15,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1i4che8x_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 12,
											width: 36,
											height: 36,
											marginRight: 8,
										}}
									/>
									<View 
										style={{
											alignItems: "center",
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Lahore, Pakistan"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Within 25 km radius"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/to9jxmyc_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 16,
										width: 7,
										height: 12,
									}}
								/>
							</View>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF00",
							padding: 24,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 6,
							elevation: 6,
						}}>
						<TouchableOpacity 
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								backgroundColor: "#FC6902",
								borderRadius: 24,
								paddingVertical: 14,
								shadowColor: "#A6350057",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 8
								},
								shadowRadius: 20,
								elevation: 20,
							}} onPress={()=>alert('Pressed!')}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/g83czrki_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 24,
									width: 13,
									height: 13,
									marginRight: 8,
								}}
							/>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"Apply Filters (148 Results)"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
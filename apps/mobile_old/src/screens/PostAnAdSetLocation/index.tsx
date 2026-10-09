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
					paddingHorizontal: 14,
				}}>
				<View >
					<View 
						style={{
							backgroundColor: "#FFFFFF00",
							paddingBottom: 115,
							shadowColor: "#00000040",
							shadowOpacity: 0.3,
							shadowOffset: {
							    width: 0,
							    height: 25
							},
							shadowRadius: 50,
							elevation: 50,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								paddingVertical: 12,
								paddingHorizontal: 16,
								marginBottom: 2,
								marginHorizontal: 1,
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
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/phll16nb_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 48,
									height: 15,
								}}
							/>
						</View>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								alignItems: "center",
								backgroundColor: "#FFFFFF",
								paddingHorizontal: 16,
								marginBottom: 19,
								marginHorizontal: 1,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/c3n051nc_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 9999,
										width: 36,
										height: 36,
										marginRight: 12,
									}}
								/>
								<Text 
									style={{
										color: "#151C27",
										fontSize: 18,
										fontWeight: "bold",
									}}>
									{"Set Location"}
								</Text>
							</View>
							<View 
								style={{
									alignItems: "center",
									backgroundColor: "#FFDBCF",
									borderRadius: 9999,
									paddingVertical: 4,
									paddingHorizontal: 12,
								}}>
								<Text 
									style={{
										color: "#390C00",
										fontSize: 12,
										fontWeight: "bold",
									}}>
									{"Step 2 of 3"}
								</Text>
							</View>
						</View>
						<View 
							style={{
								backgroundColor: "#E2E8F8",
								marginBottom: 19,
								marginHorizontal: 1,
							}}>
							<View 
								style={{
									width: 258,
									height: 4,
									backgroundColor: "#FC6901",
								}}>
							</View>
						</View>
						<View 
							style={{
								marginHorizontal: 17,
							}}>
							<Image
								source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
								resizeMode = {"stretch"}
								style={{
									height: 48,
									marginBottom: 20,
								}}
							/>
							<View 
								style={{
									flexDirection: "row",
									justifyContent: "space-between",
									alignItems: "center",
									backgroundColor: "#FFFFFF",
									borderColor: "#E2E8F8",
									borderRadius: 16,
									borderWidth: 1,
									padding: 15,
									marginBottom: 20,
									shadowColor: "#0000000D",
									shadowOpacity: 0.1,
									shadowOffset: {
									    width: 0,
									    height: 1
									},
									shadowRadius: 2,
									elevation: 2,
								}}>
								<View 
									style={{
										flexDirection: "row",
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/vh19bsg4_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											borderRadius: 9999,
											width: 44,
											height: 44,
											marginRight: 14,
										}}
									/>
									<View 
										style={{
											alignItems: "center",
										}}>
										<View 
											style={{
												paddingRight: 19,
											}}>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 14,
													fontWeight: "bold",
												}}>
												{"Use Current Location"}
											</Text>
										</View>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Detect via GPS automatically"}
										</Text>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/v4eu125o_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 16,
										width: 6,
										height: 10,
									}}
								/>
							</View>
							<View 
								style={{
									marginBottom: 20,
								}}>
								<View 
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										alignItems: "center",
										paddingHorizontal: 4,
										marginBottom: 10,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"RECENT LOCATIONS"}
									</Text>
									<Text 
										style={{
											color: "#A63500",
											fontSize: 10,
											fontWeight: "bold",
										}}>
										{"Clear"}
									</Text>
								</View>
								<View 
									style={{
										backgroundColor: "#FFFFFF",
										borderColor: "#E2E8F8",
										borderRadius: 16,
										borderWidth: 1,
										padding: 1,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}}>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											padding: 14,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/p0gl0lpq_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 15,
													height: 15,
													marginRight: 12,
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
													{"DHA Phase 5"}
												</Text>
												<Text 
													style={{
														color: "#555F6F",
														fontSize: 12,
													}}>
													{"Lahore, Punjab"}
												</Text>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/7vuozw7m_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 11,
												height: 11,
											}}
										/>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											paddingVertical: 15,
											paddingHorizontal: 14,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2wxffngv_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 15,
													height: 15,
													marginRight: 12,
												}}
											/>
											<View 
												style={{
													alignItems: "center",
												}}>
												<View 
													style={{
														paddingRight: 16,
													}}>
													<Text 
														style={{
															color: "#151C27",
															fontSize: 14,
															fontWeight: "bold",
														}}>
														{"Gulberg III"}
													</Text>
												</View>
												<Text 
													style={{
														color: "#555F6F",
														fontSize: 12,
													}}>
													{"Lahore, Punjab"}
												</Text>
											</View>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/rv4dpz4g_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 11,
												height: 11,
											}}
										/>
									</View>
								</View>
							</View>
							<View 
								style={{
									marginBottom: 20,
								}}>
								<View 
									style={{
										marginBottom: 10,
										marginHorizontal: 15,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											fontWeight: "bold",
										}}>
										{"POPULAR CITIES"}
									</Text>
								</View>
								<View 
									style={{
										backgroundColor: "#FFFFFF",
										borderColor: "#E2E8F8",
										borderRadius: 16,
										borderWidth: 1,
										padding: 1,
										shadowColor: "#0000000D",
										shadowOpacity: 0.1,
										shadowOffset: {
										    width: 0,
										    height: 1
										},
										shadowRadius: 2,
										elevation: 2,
									}}>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 16,
											paddingLeft: 16,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/4uf81imd_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 16,
												marginRight: 12,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Karachi"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											alignItems: "center",
											backgroundColor: "#FFDBCF40",
											paddingVertical: 17,
											paddingHorizontal: 20,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
											}}>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/sxzgl1k5_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 13,
													height: 16,
													marginRight: 12,
												}}
											/>
											<Text 
												style={{
													color: "#D04400",
													fontSize: 14,
													fontWeight: "bold",
												}}>
												{"Lahore"}
											</Text>
										</View>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/jcwe731q_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 9999,
												width: 24,
												height: 24,
											}}
										/>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 16,
											paddingLeft: 16,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/t69rryz7_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 16,
												marginRight: 12,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Islamabad"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 16,
											paddingLeft: 16,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/f8e90u88_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 16,
												marginRight: 12,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Rawalpindi"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 16,
											paddingLeft: 16,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/ngtfnymp_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 16,
												marginRight: 12,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Faisalabad"}
										</Text>
									</View>
									<View 
										style={{
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 16,
											paddingLeft: 16,
										}}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/wj1dvd62_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												width: 13,
												height: 16,
												marginRight: 12,
											}}
										/>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Peshawar"}
										</Text>
									</View>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									backgroundColor: "#F0F3FF",
									borderColor: "#E2E8F899",
									borderRadius: 12,
									borderWidth: 1,
									padding: 13,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/t9r5cfmy_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										borderRadius: 12,
										width: 15,
										height: 17,
										marginRight: 10,
									}}
								/>
								<View 
									style={{
										flex: 1,
									}}>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											width: 296,
										}}>
										{"Buyers in your neighborhood will discover your\nlisting first. Precise location helps close deals faster."}
									</Text>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							position: "absolute",
							bottom: 0,
							left: -14,
							backgroundColor: "#FFFFFFF0",
							padding: 16,
						}}>
						<TouchableOpacity 
							style={{
								alignSelf: "flex-start",
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#FC6901",
								borderRadius: 9999,
								paddingVertical: 14,
								paddingHorizontal: 120,
								shadowColor: "#D0440057",
								shadowOpacity: 0.3,
								shadowOffset: {
								    width: 0,
								    height: 8
								},
								shadowRadius: 20,
								elevation: 20,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFBFF",
									fontSize: 14,
									fontWeight: "bold",
									marginRight: 8,
								}}>
								{"Confirm Location"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9tdqscie_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 9999,
									width: 12,
									height: 12,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
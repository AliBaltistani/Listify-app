import React from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, ImageBackground, } from "react-native";
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
					paddingBottom: 1,
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
						paddingVertical: 16,
						paddingHorizontal: 24,
					}}>
					<Text 
						style={{
							color: "#151C27",
							fontSize: 13,
							fontWeight: "bold",
						}}>
						{"9:41"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/7heaz42f_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 46,
							height: 14,
						}}
					/>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#FFFFFF",
						paddingVertical: 10,
						paddingHorizontal: 16,
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
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/gzndb36k_expires_30_days.png"}} 
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
							{"Notifications"}
						</Text>
					</View>
					<Text 
						style={{
							color: "#FC6901",
							fontSize: 12,
							fontWeight: "bold",
						}}>
						{"Mark all as read"}
					</Text>
				</View>
				<View 
					style={{
						paddingTop: 16,
						paddingHorizontal: 16,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							paddingVertical: 2,
							marginBottom: 24,
						}}>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FC6902",
								borderRadius: 9999,
								paddingVertical: 6,
								paddingHorizontal: 16,
								marginRight: 8,
								shadowColor: "#A6350033",
								shadowOpacity: 0.2,
								shadowOffset: {
								    width: 0,
								    height: 1
								},
								shadowRadius: 2,
								elevation: 2,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"All (4)"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 6,
								paddingHorizontal: 16,
								marginRight: 9,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Messages"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 6,
								paddingHorizontal: 16,
								marginRight: 8,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Listings"}
							</Text>
						</TouchableOpacity>
						<TouchableOpacity 
							style={{
								backgroundColor: "#E2E8F8",
								borderRadius: 9999,
								paddingVertical: 6,
								paddingHorizontal: 16,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"Alerts"}
							</Text>
						</TouchableOpacity>
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
								paddingHorizontal: 4,
								marginBottom: 12,
							}}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"TODAY"}
							</Text>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
								}}>
								{"3 new"}
							</Text>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
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
									padding: 14,
								}}>
								<View 
									style={{
										alignItems: "center",
										paddingTop: 2,
										marginRight: 14,
									}}>
									<ImageBackground 
										source={{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/i4tjfni9_expires_30_days.png"}} 
										resizeMode = {'stretch'}
										imageStyle={{borderRadius: 9999,}}
										style={{
											paddingTop: 34,
											paddingLeft: 34,
										}}
										>
										<View 
											style={{
												width: 14,
												height: 14,
												backgroundColor: "#008378",
												borderColor: "#FFFFFF",
												borderRadius: 9999,
												borderWidth: 2,
											}}>
										</View>
									</ImageBackground>
								</View>
								<View 
									style={{
										flex: 1,
										paddingBottom: 2,
										paddingRight: 12,
										marginRight: 14,
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
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Ali Khan"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"10m ago"}
										</Text>
									</View>
									<View 
										style={{
											paddingBottom: 4,
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#5C4037",
												fontSize: 14,
											}}>
											{"Ali sent you a message regarding\niPhone 14 Pro"}
										</Text>
									</View>
									<TouchableOpacity 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											backgroundColor: "#F0F3FF",
											borderColor: "#DCE2F380",
											borderRadius: 6,
											borderWidth: 1,
											paddingVertical: 5,
											paddingHorizontal: 11,
										}} onPress={()=>alert('Pressed!')}>
										<Image
											source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/o3ymiuhx_expires_30_days.png"}} 
											resizeMode = {"stretch"}
											style={{
												borderRadius: 6,
												width: 11,
												height: 11,
												marginRight: 6,
											}}
										/>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"\"Is the battery health still at 94%?\""}
										</Text>
									</TouchableOpacity>
								</View>
								<View 
									style={{
										alignItems: "center",
										paddingVertical: 44,
									}}>
									<View 
										style={{
											width: 10,
											height: 10,
											backgroundColor: "#FFFFFF00",
											borderRadius: 9999,
											shadowColor: "#FFDBCF66",
											shadowOpacity: 0.4,
											shadowOffset: {
											    width: 0,
											    height: 0
											},
										}}>
									</View>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									paddingVertical: 15,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/i6n1n0wy_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 48,
										height: 50,
										marginHorizontal: 14,
									}}
								/>
								<View >
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#00685F",
												fontSize: 10,
												fontWeight: "bold",
												marginRight: 156,
											}}>
											{"LISTING ACTIVE"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"2h ago"}
										</Text>
									</View>
									<View 
										style={{
											alignSelf: "flex-start",
											alignItems: "center",
											marginBottom: 2,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
												marginBottom: 2,
												width: 280,
											}}>
											{"Your ad for MacBook Pro M2 is\nlive!"}
										</Text>
										<View 
											style={{
												alignItems: "center",
											}}>
											<Text 
												style={{
													color: "#555F6F",
													fontSize: 12,
													width: 280,
												}}>
												{"Buyers in Lahore and nearby can now\ndiscover and bid on your item."}
											</Text>
											<View 
												style={{
													position: "absolute",
													top: -3,
													right: 14,
													width: 10,
													height: 10,
													backgroundColor: "#FFFFFF00",
													borderRadius: 9999,
													shadowColor: "#FFDBCF66",
													shadowOpacity: 0.4,
													shadowOffset: {
													    width: 0,
													    height: 0
													},
												}}>
											</View>
										</View>
									</View>
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 8,
										}}>
										<View 
											style={{
												flexDirection: "row",
												alignItems: "center",
												marginRight: 12,
											}}>
											<Text 
												style={{
													color: "#FC6901",
													fontSize: 12,
													fontWeight: "bold",
													marginRight: 4,
												}}>
												{"View listing"}
											</Text>
											<Image
												source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/nvgeqtm8_expires_30_days.png"}} 
												resizeMode = {"stretch"}
												style={{
													width: 10,
													height: 10,
												}}
											/>
										</View>
										<Text 
											style={{
												color: "#DCE2F3",
												fontSize: 16,
												marginRight: 13,
											}}>
											{"•"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"32 views in queue"}
										</Text>
									</View>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									paddingVertical: 15,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/9bjy0e3k_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 48,
										height: 50,
										marginHorizontal: 14,
									}}
								/>
								<View >
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											marginBottom: 4,
										}}>
										<Text 
											style={{
												color: "#FC6901",
												fontSize: 10,
												fontWeight: "bold",
												marginRight: 173,
											}}>
											{"PRICE ALERT"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"5h ago"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#151C27",
											fontSize: 14,
											fontWeight: "bold",
											marginBottom: 3,
											width: 280,
										}}>
										{"Price Drop Alert: Nike Air Jordan 1\nwas reduced to $85!"}
									</Text>
									<View 
										style={{
											alignSelf: "flex-start",
											flexDirection: "row",
											alignItems: "center",
											paddingVertical: 4,
										}}>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
												textDecorationLine: "line-through",
												marginRight: 8,
											}}>
											{"$120"}
										</Text>
										<View 
											style={{
												backgroundColor: "#FFDBCF",
												borderRadius: 4,
												paddingVertical: 1,
												paddingHorizontal: 8,
											}}>
											<Text 
												style={{
													color: "#390C00",
													fontSize: 11,
													fontWeight: "bold",
												}}>
												{"29% OFF"}
											</Text>
										</View>
									</View>
								</View>
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
								paddingHorizontal: 4,
								marginBottom: 12,
							}}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
									fontWeight: "bold",
								}}>
								{"EARLIER"}
							</Text>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 12,
								}}>
								{"Past 7 days"}
							</Text>
						</View>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 12,
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
									backgroundColor: "#FFFFFF",
									padding: 14,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/2f6ui5vi_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 48,
										height: 50,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										flex: 1,
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
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"SECURITY"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"2 days ago"}
										</Text>
									</View>
									<View 
										style={{
											marginBottom: 3,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
											}}>
											{"Your phone number +971 1123 123 1234\nwas verified successfully"}
										</Text>
									</View>
									<View >
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"Your profile badge now displays the trusted\nseller verification mark."}
										</Text>
									</View>
								</View>
							</View>
							<View 
								style={{
									flexDirection: "row",
									backgroundColor: "#FFFFFF",
									paddingVertical: 15,
									paddingHorizontal: 14,
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/947ba1n7_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 48,
										height: 50,
										marginRight: 14,
									}}
								/>
								<View 
									style={{
										flex: 1,
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
												color: "#555F6F",
												fontSize: 10,
												fontWeight: "bold",
											}}>
											{"BADGE UNLOCKED"}
										</Text>
										<Text 
											style={{
												color: "#555F6F",
												fontSize: 12,
											}}>
											{"4 days ago"}
										</Text>
									</View>
									<View >
										<Text 
											style={{
												color: "#151C27",
												fontSize: 14,
											}}>
											{"Welcome to Listify Gold Community.\nYou unlocked complimentary priority\nbumping!"}
										</Text>
									</View>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							backgroundColor: "#F0F3FF",
							borderColor: "#E7EEFE",
							borderRadius: 12,
							borderWidth: 1,
							padding: 17,
							marginBottom: 95,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/13uxv4ns_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 16,
									height: 16,
									marginRight: 12,
								}}
							/>
							<View 
								style={{
									alignItems: "center",
								}}>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											paddingRight: 43,
										}}>
										<Text 
											style={{
												color: "#151C27",
												fontSize: 12,
												fontWeight: "bold",
											}}>
											{"Notification Settings"}
										</Text>
									</View>
									<Text 
										style={{
											color: "#555F6F",
											fontSize: 12,
											width: 168,
										}}>
										{"Customize push, SMS & email\nfrequencies"}
									</Text>
								</View>
							</View>
						</View>
						<TouchableOpacity 
							style={{
								backgroundColor: "#FFFFFF",
								borderColor: "#DCE2F3",
								borderRadius: 9999,
								borderWidth: 1,
								paddingVertical: 6,
								paddingHorizontal: 13,
							}} onPress={()=>alert('Pressed!')}>
							<Text 
								style={{
									color: "#555F6F",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"Configure"}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
				<ScrollView 
					horizontal
					showsHorizontalScrollIndicator={false} 
					style={{
						flexDirection: "row",
						marginBottom: 1,
					}}>
					<View 
						style={{
							marginTop: 45,
							marginLeft: 30,
							marginRight: 70,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/zg1240zs_expires_30_days.png"}} 
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
							marginTop: 47,
							marginBottom: 13,
							marginRight: 32,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/6ptqvn9m_expires_30_days.png"}} 
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
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/yn5f6nve_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							borderRadius: 50,
							width: 55,
							height: 55,
							marginTop: 9,
							marginRight: 34,
						}}
					/>
					<View 
						style={{
							marginTop: 47,
							marginRight: 21,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1wdxwxic_expires_30_days.png"}} 
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
							marginTop: 47,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/cuvSMyWReR/1wdxwxic_expires_30_days.png"}} 
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
				</ScrollView>
			</ScrollView>
		</SafeAreaView>
	)
}